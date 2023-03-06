import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongObject, HistoryType } from '../model/types';
import { format } from 'date-fns';

export type State = {
  currentSong: SongObject;
  isPlaying: boolean;
  favourites: SongObject[];
  playlist: SongObject[];
  currentIndex: number;
  history: HistoryType[];
};

type PlaylistPayload = {
  playlist: SongObject[];
  index: number;
};

const initialState: State = {
  currentSong: {} as SongObject,
  isPlaying: false,
  favourites: [],
  playlist: [],
  currentIndex: 0,
  history: [],
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<SongObject>) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    setPlaySong: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    addToFavourites: (state, action: PayloadAction<SongObject>) => {
      // check if theres favourites in localStorage and push it to the state
      const favourites: SongObject[] =
        JSON.parse(localStorage.getItem('favourites')!) || [];
      state.favourites = [...favourites];

      // add song to the favourites
      state.favourites.push(action.payload);

      // add to local storage
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      const favourites: SongObject[] =
        JSON.parse(localStorage.getItem('favourites')!) || [];
      state.favourites = [...favourites];

      // get song index
      const songIndex = state.favourites.findIndex(
        song => song.key === action.payload
      );

      // delete from favs
      state.favourites.splice(songIndex, 1);

      // update local storage
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    },
    createPlaylist: (state, action: PayloadAction<PlaylistPayload>) => {
      state.playlist = action.payload.playlist;
      state.currentIndex = action.payload.index;
    },
    addToHistory: (state, action: PayloadAction<SongObject>) => {
      // need to check if that song is already in history, if its already in history remove it and push it back. the same song will not be twice displayed in history and it will be displayed only the latest streaming of the song

      // check if theres history in localStorage and push it to the state
      const history: HistoryType[] =
        JSON.parse(localStorage.getItem('history')!) || [];
      state.history = [...history];

      // check if song its already in history
      const indexInHistory = state.history.findIndex(
        item => item.song.key === action.payload.key
      );

      // delete from history if its there
      if (indexInHistory !== -1) {
        state.history.splice(indexInHistory, 1);
      }

      // add song to the history
      state.history.push({
        song: action.payload,
        date: format(new Date(), 'dd. MMMM'),
      });

      // add to local storage
      localStorage.setItem('history', JSON.stringify(state.history));
    },
  },
});

export const {
  setCurrentSong,
  setPlaySong,
  addToFavourites,
  removeFromFavourites,
  createPlaylist,
  addToHistory,
} = tracksSlice.actions;

export default tracksSlice.reducer;
