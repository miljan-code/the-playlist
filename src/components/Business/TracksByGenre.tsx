import { useSongsData } from '../../redux/shazamApi';
import Song from './Song';
import styles from './TracksByCountry.module.css';

const TracksByGenre = () => {
  const playlist = useSongsData({ type: 'house', num: 20 });

  return (
    <div className={styles.playlist}>
      <h2 className={styles.label}>Best of House Music in 2023</h2>
      <div className={styles['song-list']}>
        {playlist?.map((data, i) => (
          <Song
            key={crypto.randomUUID()}
            data={data}
            index={i}
            playlist={playlist}
          />
        ))}
      </div>
    </div>
  );
};

export default TracksByGenre;
