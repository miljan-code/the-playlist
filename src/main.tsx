import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './layout/RootLayout';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import {
  Favourites,
  Home,
  Recommended,
  TopCharts,
  History,
  SearchPage,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/recommended',
        element: <Recommended />,
      },
      {
        path: '/top-charts',
        element: <TopCharts />,
      },
      {
        path: '/favourites',
        element: <Favourites />,
      },
      {
        path: '/history',
        element: <History />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
