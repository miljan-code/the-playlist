import { Album } from '../components';
import { useGetTopChartsQuery } from '../redux/shazamApi';
import styles from './Recommended.module.css';

const Recommended = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(50);

  console.log(data);

  return (
    <div className={styles.recommended}>
      <div className={styles.hero}>
        <h2>The Best Tracks of 2023</h2>
        <h3>Just for You!</h3>
      </div>
      <div className={styles['songs-list']}>
        {data?.map(item => (
          <Album key={crypto.randomUUID()} song={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
