import express, { Request, Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import { renderToPipeableStream, type RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';

import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import React from 'react';
import { initStore } from 'store';
import { api } from './slices/apiSlice';

const renderApp = async (req: Request, res: Response) => {
  const store = initStore();

  store.dispatch(api.endpoints.getGames.initiate(''));
  store.dispatch(api.endpoints.getPublishers.initiate(''));

  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

  const initState = store.getState();

  const stream = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    {
      onShellReady: () => {
        stream.pipe(res);
      },
      onAllReady: () => {
        store.dispatch(api.util.resetApiState());
        res.end();
      },
    }
  );
};
