import { useEffect, useRef } from 'react';
import { AiOutlinePause } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { DurationBar } from './Icons';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import styles from './Player.module.css';
import { setPlaySong } from '../redux/tracksSlice';

const Player = () => {
  const dispatch = useAppDispatch();
  const { currentSong, isPlaying } = useAppSelector(state => state.tracks);
  const playerRef = useRef<HTMLAudioElement>(null);

  const activeSong =
    currentSong?.hub?.actions && currentSong?.hub?.actions[1]?.uri;

  useEffect(() => {
    if (isPlaying) playerRef.current!.play();
    else if (!isPlaying) playerRef.current!.pause();
  }, [currentSong, isPlaying]);

  const handlePlayPause = () => {
    dispatch(setPlaySong(!isPlaying));
  };

  return (
    <div className={styles.player}>
      <div className={styles.controls}>
        <img src="/prev-song.svg" />
        <div onClick={handlePlayPause}>
          {isPlaying && <AiOutlinePause className={styles.icon} />}
          {!isPlaying && <BsPlayFill className={styles.icon} />}
        </div>
        <img src="/next-song.svg" />
      </div>
      <div className={styles['song-details']}>
        <img src={currentSong?.images?.coverart || '/album-4.png'} />
        <div className={styles['song-labels']}>
          <p>{currentSong?.title || 'A Wonderful Time'}</p>
          <p>{currentSong?.subtitle || 'Selena Gomez'}</p>
        </div>
      </div>
      <div className={styles.duration}>
        <DurationBar />
        <p>
          2:14 <span>/ 3:13</span>
        </p>
      </div>
      <div className={styles.buttons}>
        <img src="/shuffle-icon.svg" />
        <img src="/repeat-icon.svg" />
        <img src="/volume-icon.svg" />
        <img src="/add-to-playlist-icon.svg" />
      </div>
      <audio ref={playerRef} src={activeSong} />
    </div>
  );
};

export default Player;
