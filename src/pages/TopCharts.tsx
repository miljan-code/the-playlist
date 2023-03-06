import { Chart } from '../components';
import { useGetTopChartsData } from '../redux/shazamApi';
import styles from './TopCharts.module.css';

const TopCharts = () => {
  const { hiphop, kpop, rock, misc } = useGetTopChartsData(10);

  return (
    <div className={styles.charts}>
      <Chart label="Best of Hip-Hop" playlist={hiphop} />
      <Chart label="Best of KPop" playlist={kpop} />
      <Chart label="Best of Rock" playlist={rock} />
      <Chart label="Trending music" playlist={misc} />
    </div>
  );
};

export default TopCharts;
