import { configureStore } from '@reduxjs/toolkit';
import { api } from './slices/apiSlice';
import { gamesSlice } from './slices/gameSlice';

export const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
