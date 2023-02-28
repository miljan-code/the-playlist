import { Album } from '../../components';
import { albums } from '../../constants/albums';
import styles from './Albums.module.css';

const Albums = () => {
  return (
    <div className={styles.albums}>
      <p className={styles.label}>Recommended Albums</p>
      <div className={styles['album-list']}>
        {albums.map(item => (
          <Album
            key={crypto.randomUUID()}
            cover={item.cover}
            title={item.title}
            artist={item.artist}
          />
        ))}
      </div>
    </div>
  );
};

export default Albums;
