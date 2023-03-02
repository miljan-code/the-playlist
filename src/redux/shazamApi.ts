import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { shuffle } from '../misc/helpers';
import { RootObject } from '../model/shazamTypes';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API);

      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query<RootObject[], number>({
      query: () => '/charts/world',
      transformResponse: (result: RootObject[], _, num) => {
        return shuffle(result).slice(0, num);
      },
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamApi;
