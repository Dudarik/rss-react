import express, { Request, Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';

import fs from 'fs';

import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import React from 'react';
import { initStore } from 'store';
import { api } from './slices/apiSlice';
import path from 'path';

const renderApp = async (req: Request, res: Response) => {
  const store = initStore();

  store.dispatch(api.endpoints.getGames.initiate(''));
  store.dispatch(api.endpoints.getPublishers.initiate(''));

  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

  const initState = store.getState();

  const indexHtml = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

  const partsOfIndexHtml = indexHtml.split('<!--app-html-->');

  const stream = renderToPipeableStream(
    <StaticRouter location={location}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    {
      onShellReady() {
        res.write(partsOfIndexHtml[0]);
        stream.pipe(res);
      },
      onAllReady() {
        res.write(`<script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(initState).replace(/</g, '\\u003c')}
          </script>`);
        res.write(partsOfIndexHtml[1]);
        res.end();
      },
    }
  );
};
