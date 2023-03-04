import topCharts from '../../songs.json';
import houseMusic from '../../houseSongs.json';
import { shuffle } from '../misc/helpers';
import { ShazamObject } from '../model/shazamTypes';

type SongsFetch = {
  type: 'top-charts' | 'house';
  num?: number;
  randomize?: boolean;
};

export const useSongsData = ({
  type = 'top-charts',
  num = 50,
  randomize = false,
}: SongsFetch): ShazamObject[] => {
  if (type === 'top-charts' && !randomize) return topCharts.slice(0, num);
  else if (type === 'top-charts' && randomize)
    return shuffle(topCharts).slice(0, num);
  else if (type === 'house' && !randomize)
    return houseMusic.slice(0, num) as ShazamObject[];
  else if (type === 'house' && randomize)
    return shuffle(houseMusic).slice(0, num) as ShazamObject[];
  else return topCharts;
};

// NOTE: ShazamAPI Legacy ( Closed Freemium :( )

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { shuffle } from '../misc/helpers';
// import { ShazamObject } from '../model/shazamTypes';

// export const shazamApi = createApi({
//   reducerPath: 'shazamApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
//     prepareHeaders: headers => {
//       headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API);

//       return headers;
//     },
//   }),
//   endpoints: builder => ({
//     getTopCharts: builder.query<ShazamObject[], number>({
//       query: () => '/charts/world',
//       transformResponse: (result: ShazamObject[], _, num) => {
//         return shuffle(result).slice(0, num);
//       },
//     }),
//     getTracksByLocation: builder.query<ShazamObject[], string>({
//       query: country => `/charts/country?country_code=${country}`,
//       transformResponse: (result: ShazamObject[]) => {
//         return result.slice(0, 20);
//       },
//     }),
//     getTracksByGenre: builder.query<ShazamObject[], string>({
//       query: genre => `/charts/genre-world?genre_code=${genre}`,
//       transformResponse: (result: ShazamObject[]) => {
//         return result.slice(0, 20);
//       },
//     }),
//   }),
// });

// export const {
//   useGetTopChartsQuery,
//   useGetTracksByLocationQuery,
//   useGetTracksByGenreQuery,
// } = shazamApi;
