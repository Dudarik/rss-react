import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'config/API_paths';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: (args) => `games/${args}`,
    }),
    getGame: builder.query({
      query: (id) => `games/${id}`,
    }),
    getPublishers: builder.query({
      query: () => `publishers/`,
    }),
  }),
});

export const { useGetGameQuery, useGetGamesQuery, useGetPublishersQuery } = api;
