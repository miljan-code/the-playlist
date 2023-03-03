import { HomeIcon, RecommendedIcon, TopChartsIcon } from '../layout/Icons';
import FavouritesIcon from '../layout/Icons/FavouritesIcon';
import HistoryIcon from '../layout/Icons/HistoryIcon';
import { NavLink } from '../model/types';

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
