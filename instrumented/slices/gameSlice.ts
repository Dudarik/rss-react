import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGameData } from '../interfaces/cardsIterfaces';

export type TState = {
  games: IGameData[];
  searchString: string;
};

const initialState: TState = {
  games: [],
  searchString: '',
};

export const gamesSlice = createSlice({
  name: '@@games',
  initialState,
  reducers: {
    addGame: (state: TState, action: PayloadAction<IGameData>) => {
      state.games.push(action.payload);
    },

    addSearchString: (state: TState, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
});

export const { addGame, addSearchString } = gamesSlice.actions;
