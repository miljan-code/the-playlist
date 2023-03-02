import { Playlist } from '../../components';
import styles from './Songs.module.css';

const Songs = () => {
  return (
    <div className={styles.songs}>
      {/* TODO: change to Top in Your Country */}
      <Playlist label="songs" />
      {/* TODO: change to Best in *_* Genre */}
      <Playlist label="albums" />
    </div>
  );
};

export default Songs;
