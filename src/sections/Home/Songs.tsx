import { Playlist } from '../../components';
import styles from './Songs.module.css';

const Songs = () => {
  return (
    <div className={styles.songs}>
      <Playlist label="songs" />
      <Playlist label="albums" />
    </div>
  );
};

export default Songs;
