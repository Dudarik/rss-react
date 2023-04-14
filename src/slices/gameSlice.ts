import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
    resetGameStore: (state: IGamesData) => {
      state.games = [];
    },
  },
});

export const { addGame } = gamesSlice.actions;
