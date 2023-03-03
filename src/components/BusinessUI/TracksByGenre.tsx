import { useGetTracksByGenreQuery } from '../../redux/shazamApi';
import Song from './Song';
import styles from './TracksByCountry.module.css';

const TracksByGenre = () => {
  const {
    data: playlist,
    isFetching,
    error,
  } = useGetTracksByGenreQuery('HOUSE');

  return (
    <div className={styles.playlist}>
      <h2 className={styles.label}>Best of House Music in 2023</h2>
      <div className={styles['song-list']}>
        {playlist?.map((data, i) => (
          <Song key={crypto.randomUUID()} data={data} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default TracksByGenre;
