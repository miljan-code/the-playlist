import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ShazamObject } from '../../model/shazamTypes';
import {
  setCurrentSong,
  setPlaySong,
  addToFavourites,
  removeFromFavourites,
  createPlaylist,
} from '../../redux/tracksSlice';
import { toast } from 'react-toastify';
import styles from './Song.module.css';

type SongProps = {
  data: ShazamObject;
  index: number;
  playlist: ShazamObject[];
};

const Song = ({ data, playlist, index }: SongProps) => {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector(state => state.tracks);

  const songNumber = index < 10 ? `0${index + 1}` : `${index + 1}`;
  const alreadyAdded = favourites.some(item => item.key === data.key);

  const handleTrackPlay = () => {
    dispatch(setCurrentSong(data));
    dispatch(setPlaySong(true));
    dispatch(createPlaylist({ playlist, index }));
  };

  const handleAddToFavourites = () => {
    if (!alreadyAdded) {
      dispatch(addToFavourites(data));
      toast('❤ Added to favourites');
    } else {
      dispatch(removeFromFavourites(data.key));
    }
  };

  return (
    <div className={styles.song}>
      <div className={styles.details}>
        <p>{songNumber}</p>
        <span onClick={handleAddToFavourites}>{alreadyAdded ? '-' : '+'}</span>
        <img onClick={handleTrackPlay} src={data.images?.coverart} />
        <div className={styles.labels}>
          <p onClick={handleTrackPlay}>{data.title}</p>
          <p onClick={handleTrackPlay}>{data.subtitle}</p>
        </div>
      </div>
      <div className={styles.options}>
        <p>1:29</p>
        <div className={styles.dots}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </div>
    </div>
  );
};

export default Song;
