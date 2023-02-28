import { Playlist } from '../../components';
import styles from './Songs.module.css';

const Songs = () => {
  return (
    <div className={styles.songs}>
      <Playlist />
      <Playlist />
    </div>
  );
};

export default Songs;
