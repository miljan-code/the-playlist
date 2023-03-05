import { useAppDispatch } from '../../redux/hooks';
import {
  setCurrentSong,
  setPlaySong,
  createPlaylist,
} from '../../redux/tracksSlice';
import { ShazamObject } from '../../model/types';
import { BsPlayCircleFill } from 'react-icons/bs';
import styles from './Album.module.css';

type AlbumType = {
  song: ShazamObject;
  playlist: ShazamObject[];
  index: number;
};

const Album = ({ song, playlist, index }: AlbumType) => {
  const dispatch = useAppDispatch();

  const handleTrackPlay = () => {
    dispatch(setCurrentSong(song));
    dispatch(setPlaySong(true));
    dispatch(createPlaylist({ playlist, index }));
  };

  return (
    <div className={styles.album}>
      <div className={styles.background} />
      <div className={styles['img-container']}>
        <img src={song.images?.coverart || '/album-5.png'} />
        <div className={styles['img-overlay']}>
          <BsPlayCircleFill className={styles.icon} onClick={handleTrackPlay} />
        </div>
      </div>
      <h3>{song.title}</h3>
      <p>{song.subtitle}</p>
    </div>
  );
};

export default Album;
