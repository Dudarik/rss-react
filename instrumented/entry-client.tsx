import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { TRootState, initStore } from './store';

import App from './App';
import './index.scss';

type TWindowCustom = Window &
  typeof globalThis & {
    __PRELOADED_STATE__?: TRootState;
  };

const customWindow: TWindowCustom = window;

const store = initStore(customWindow.__PRELOADED_STATE__);

console.log(window);

delete customWindow.__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
