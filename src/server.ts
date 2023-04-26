import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import { TrenderApp } from './entry-server';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});
app.use(vite.middlewares);

app.use('/assets', express.static(path.resolve(__dirname, '../dist/client/assets')));

app.use('*', async (req: Request, res: Response, next: NextFunction) => {
  let renderApp: TrenderApp;
  try {
    renderApp = (await vite.ssrLoadModule('./src/entry-server.tsx')).renderApp;

    await renderApp(req, res);
  } catch (e) {
    if (!isProd) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    } else {
      console.log((e as Error).stack);
      res.status(500).end((e as Error).stack);
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
