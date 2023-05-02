import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './slices/apiSlice';
import { gamesSlice } from './slices/gameSlice';

const rootReducer = combineReducers({
  games: gamesSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const initStore = (preloadedState?: PreloadedState<TRootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });

export type TRootState = ReturnType<typeof rootReducer>;
