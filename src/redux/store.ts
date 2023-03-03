import { configureStore } from '@reduxjs/toolkit';

import tracksReducer from './tracksSlice';
import { shazamApi } from './shazamApi';

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    tracks: tracksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
