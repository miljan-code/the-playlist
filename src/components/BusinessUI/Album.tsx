import { BsPlayCircleFill } from 'react-icons/bs';
import styles from './Album.module.css';

type Props = {
  cover: string;
  title: string;
  artist: string;
};

const Album = ({ cover, title, artist }: Props) => {
  return (
    <div className={styles.album}>
      <div className={styles.background} />
      <div className={styles['img-container']}>
        <img src={cover} />
        <div className={styles['img-overlay']}>
          <BsPlayCircleFill className={styles.icon} />
        </div>
      </div>
      {/* TODO: truncate title */}
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default Album;
