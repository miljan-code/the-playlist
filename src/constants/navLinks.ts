import { NavLink } from '../model/types';
import {
  HomeIcon,
  RecommendedIcon,
  TopChartsIcon,
  FavouritesIcon,
  HistoryIcon,
} from '../layout/Icons';

export const browseMusic: NavLink[] = [
  {
    label: 'Home',
    icon: HomeIcon,
    link: '/',
  },
  {
    label: 'Recommendations',
    icon: RecommendedIcon,
    link: '/recommended',
  },
  {
    label: 'Top Charts',
    icon: TopChartsIcon,
    link: '/top-charts',
  },
];

export const yourMusic: NavLink[] = [
  {
    label: 'Favourites',
    icon: FavouritesIcon,
    link: '/favourites',
  },
  {
    label: 'History',
    icon: HistoryIcon,
    link: '/history',
  },
];
