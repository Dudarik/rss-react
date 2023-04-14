import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../config/API_paths';
import { IGameData, IPublisher } from '../interfaces/cardsIterfaces';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getGames: builder.query<IGameData[], string>({
      query: (arg) => `games/?title_like=${arg}`,
    }),
    getGame: builder.query<IGameData, number>({
      query: (id) => `games/${id}`,
    }),
    getPublishers: builder.query<IPublisher[], string>({
      query: (arg) => `publishers/${arg}`,
    }),
  }),
});

export const { useGetGameQuery, useGetGamesQuery, useGetPublishersQuery } = api;
