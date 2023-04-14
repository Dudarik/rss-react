import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { IGameData, IGamesData } from 'interfaces/cardsIterfaces';

const initialState: IGamesData = {
  games: [],
  publishers: [],
};

export const gamesSlice = createSlice({
  name: '@@games',
  initialState,
  reducers: {
    addGame: (state: IGamesData, action: PayloadAction<IGameData>) => {
      state.games.push(action.payload);
    },
  },
});

export const { addGame } = gamesSlice.actions;

export const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
    // [api.reducerPath]: api.reducer,
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
