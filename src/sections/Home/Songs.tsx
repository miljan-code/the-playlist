import { Chart } from '../../components';
import { useSongsData } from '../../redux/shazamApi';
import styles from './Songs.module.css';

const Songs = () => {
  const houseMusic = useSongsData({ type: 'house', n: 20 });
  const topCharts = useSongsData({ type: 'top-charts', n: 20 });

  return (
    <div className={styles.songs}>
      <Chart label="Trending in Your Country" playlist={topCharts} />
      <Chart label="Fresh House Music for You" playlist={houseMusic} />
    </div>
  );
};

export default Songs;
