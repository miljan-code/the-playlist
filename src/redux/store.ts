import { configureStore } from '@reduxjs/toolkit';

import audioReducer from './audioSlice';
import { shazamApi } from './shazamApi';

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    audio: audioReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});
