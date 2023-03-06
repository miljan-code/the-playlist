import topCharts from '../constants/songs.json';
import topCharts2 from '../constants/songs-2.json';
import houseMusic from '../constants/houseSongs.json';
import hipHopSongs from '../constants/hipHopSongs.json';
import kPop from '../constants/kPop.json';
import rockMusic from '../constants/rockMusic.json';
import songs2 from '../constants/songs-2.json';
import { SongObject } from '../model/types';

type SongsFetch = {
  type: 'top-charts' | 'house' | 'top-charts2';
  n?: number;
};

export const useSongsData = ({
  type = 'top-charts',
  n = 50,
}: SongsFetch): SongObject[] => {
  if (type === 'top-charts') return topCharts.slice(0, n);
  else if (type === 'house') return houseMusic.slice(0, n) as SongObject[];
  else if (type === 'top-charts2') return topCharts2.slice(0, n);
  else return topCharts;
};

export const useSearchSongData = (term: string) => {
  // Concatinating all the used songs from all JSONs
  const songs = [...topCharts, ...houseMusic, ...topCharts2];
  // Maybe there will be some duplicates so I need to get rid of them
  const keys = songs.map(item => item.key);
  const filtered = songs.filter(
    ({ key }, index) => !keys.includes(key, index + 1)
  );
  // Here I'm filtering if song title or song artists matches the searched term
  const matches = filtered.filter(
    item =>
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(term.toLowerCase())
  );
  // Then returning results
  return matches as SongObject[];
};

export const useGetTopChartsData = (n: number) => {
  return {
    hiphop: hipHopSongs.slice(0, n),
    kpop: kPop.slice(0, n),
    rock: rockMusic.slice(0, n),
    misc: songs2.slice(0, n),
  };
};

// NOTE: ShazamAPI Legacy ( Closed Freemium :( )

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { shuffle } from '../misc/helpers';
// import { ShazamObject } from '../model/types';

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
