import { useSongsData } from '../redux/shazamApi';
import { Album } from '../components';
import styles from './Recommended.module.css';

const Recommended = () => {
  const data = useSongsData({ type: 'top-charts2' });

  return (
    <div className={styles.recommended}>
      <div className={styles.hero}>
        <h2>The Best Tracks of 2023</h2>
        <h3>Just for You!</h3>
      </div>
      <div className={styles['songs-list']}>
        {data?.map((item, i) => (
          <Album
            key={crypto.randomUUID()}
            song={item}
            playlist={data}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
