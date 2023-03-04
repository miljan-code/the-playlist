import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShazamObject } from '../model/shazamTypes';

export type State = {
  currentSong: ShazamObject;
  isPlaying: boolean;
  favourites: ShazamObject[];
  playlist: ShazamObject[];
  currentIndex: number;
};

type PlaylistPayload = {
  playlist: ShazamObject[];
  index: number;
};

const initialState: State = {
  currentSong: {} as ShazamObject,
  isPlaying: false,
  favourites: [],
  playlist: [],
  currentIndex: 0,
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setCurrentSong: (state, action: PayloadAction<ShazamObject>) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },
    setPlaySong: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    addToFavourites: (state, action: PayloadAction<ShazamObject>) => {
      state.favourites.push(action.payload);
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      const songIndex = state.favourites.findIndex(
        song => song.key === action.payload
      );
      state.favourites.splice(songIndex, 1);
    },
    createPlaylist: (state, action: PayloadAction<PlaylistPayload>) => {
      state.playlist = action.payload.playlist;
      state.currentIndex = action.payload.index;
    },
  },
});

export const {
  setCurrentSong,
  setPlaySong,
  addToFavourites,
  removeFromFavourites,
  createPlaylist,
} = tracksSlice.actions;

export default tracksSlice.reducer;
