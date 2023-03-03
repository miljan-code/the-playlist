import { TracksByCountry, TracksByGenre } from '../../components';
import styles from './Songs.module.css';

const Songs = () => {
  return (
    <div className={styles.songs}>
      <TracksByCountry />
      <TracksByGenre />
    </div>
  );
};

export default Songs;
