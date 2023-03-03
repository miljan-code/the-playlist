import { BsPlayCircleFill } from 'react-icons/bs';
import styles from './Album.module.css';
import { ShazamObject } from '../../model/shazamTypes';
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentSong, setPlaySong } from '../../redux/tracksSlice';

const Album = ({ song }: { song: ShazamObject }) => {
  const dispatch = useAppDispatch();

  const handleTrackPlay = () => {
    dispatch(setCurrentSong(song));
    dispatch(setPlaySong(true));
  };

  return (
    <div className={styles.album}>
      <div className={styles.background} />
      <div className={styles['img-container']}>
        <img src={song.images?.coverart || 'no-pic-placeholder'} />
        <div className={styles['img-overlay']}>
          <BsPlayCircleFill className={styles.icon} onClick={handleTrackPlay} />
        </div>
      </div>
      {/* TODO: on hover show full title or artist name if is truncated */}
      <h3>{song.title}</h3>
      <p>{song.subtitle}</p>
    </div>
  );
};

export default Album;
