import styles from './TopCharts.module.css';
import { useSongsData } from '../redux/shazamApi';

const TopCharts = () => {
  useSongsData({ type: 'top-charts' });
  return <div>TopCharts</div>;
};

export default TopCharts;
