import {
  HomeIcon,
  RecommendedIcon,
  NewReleasesIcon,
  TopChartsIcon,
} from '../layout/Icons';
import FavouritesIcon from '../layout/Icons/FavouritesIcon';
import HistoryIcon from '../layout/Icons/HistoryIcon';
import { NavLink } from '../model/types';

export const browseMusic: NavLink[] = [
  {
    label: 'Home',
    icon: HomeIcon,
  },
  {
    label: 'Recommendations',
    icon: RecommendedIcon,
  },
  {
    label: 'New Releases',
    icon: NewReleasesIcon,
  },
  {
    label: 'Top Charts',
    icon: TopChartsIcon,
  },
];

export const yourMusic: NavLink[] = [
  {
    label: 'Favourites',
    icon: FavouritesIcon,
  },
  {
    label: 'History',
    icon: HistoryIcon,
  },
];
