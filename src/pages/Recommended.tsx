import { Album } from '../components';
import { useGetTopChartsQuery } from '../redux/shazamApi';
import styles from './Recommended.module.css';

const Recommended = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(50);

  console.log(data);

  return (
    <div className={styles.recommended}>
      <h2>Recommended for you</h2>
      <div className={styles['songs-list']}></div>
    </div>
  );
};

export default Recommended;
