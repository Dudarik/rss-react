// import { resolve } from 'path';
import express from 'express';
import { createServer as createViteServer, ViteDevServer } from 'vite';
// import serveStatic from 'serve-static';

const app = express();
const PORT = 3000;

const isProd = process.env.NODE_ENV === 'production';

let vite: ViteDevServer | undefined;

if (!isProd) {
  vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
}

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  let renderApp;
  try {
    if (!isProd) {
      renderApp = (await vite!.ssrLoadModule('./src/entry-server.tsx')).renderApp;
    }

    await renderApp(url, res);
  } catch (e) {
    if (!isProd) {
      vite!.ssrFixStacktrace(e as Error);
      next(e);
    } else {
      console.log((e as Error).stack);
      res.status(500).end((e as Error).stack);
    }
  }
});

app.use('/static', express.static('assets'));

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
