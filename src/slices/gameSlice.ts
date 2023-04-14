import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGameData, IPublisher } from 'interfaces/cardsIterfaces';

export type TState = {
  games: IGameData[];
  publishers: IPublisher[];
  searchString: string;
  error: string;
};

const initialState: TState = {
  games: [],
  publishers: [],
  searchString: '',
  error: '',
};

export const gamesSlice = createSlice({
  name: '@@games',
  initialState,
  reducers: {
    addGame: (state: TState, action: PayloadAction<IGameData[]>) => {
      state.games.push(...action.payload);
    },
    resetGames: (state: TState) => {
      state.games = [];
    },
    resetPublishers: (state: TState) => {
      state.publishers = [];
    },

    addPublishers: (state: TState, action: PayloadAction<IPublisher[]>) => {
      state.publishers.push(...action.payload);
    },

    addSearchString: (state: TState, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
  },
});

export const { addGame, resetGames, resetPublishers, addPublishers, addSearchString } =
  gamesSlice.actions;
