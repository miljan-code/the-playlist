import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  createPlaylist,
  setCurrentSong,
  setPlaySong,
  addToFavourites,
  removeFromFavourites,
} from '../redux/tracksSlice';
import {
  DurationBar,
  RepeatIcon,
  AddToFavouritesIcon,
  ShuffledIcon,
} from './Icons';
import { toast } from 'react-toastify';
import { AiOutlinePause } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import styles from './Player.module.css';

const Player = () => {
  // redux
  const dispatch = useAppDispatch();
  const { currentSong, isPlaying, playlist, currentIndex, favourites } =
    useAppSelector(state => state.tracks);
  // state
  const [repeat, setRepeat] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [openVolume, setOpenVolume] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [durationPercent, setDurationPercent] = useState(0);
  // refs
  const playerRef = useRef<HTMLAudioElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // side effects
  useEffect(() => {
    if (isPlaying) playerRef.current!.play();
    else if (!isPlaying) playerRef.current!.pause();

    const isInFav = favourites.some(item => item.key === currentSong.key);
    setIsFavourite(isInFav);
  }, [currentSong, isPlaying, favourites]);

  // data transformation
  const activeSong =
    currentSong?.hub?.actions && currentSong?.hub?.actions[1]?.uri;

  const songDuration =
    (playerRef.current?.duration &&
      new Date(playerRef.current!.duration * 1000)
        .toISOString()
        .substring(14, 19)) ||
    '01:29';

  // handlers
  const handlePlayPause = () => {
    dispatch(setPlaySong(!isPlaying));
  };

  const handlePrevSong = () => {
    if (currentIndex < 1) return;
    dispatch(setCurrentSong(playlist[currentIndex - 1]));
    dispatch(createPlaylist({ playlist, index: currentIndex - 1 }));
  };

  const handleNextSong = () => {
    if (currentIndex > playlist.length - 2) return;
    dispatch(setCurrentSong(playlist[currentIndex + 1]));
    dispatch(createPlaylist({ playlist, index: currentIndex + 1 }));
  };

  const handleAddToFavourites = () => {
    if (isFavourite) dispatch(removeFromFavourites(currentSong.key));
    else {
      dispatch(addToFavourites(currentSong));
      toast('❤ Add to favourites!');
    }
  };

  const handleNextSongShuffled = () => {
    const randomIndex = Math.floor(Math.random() * playlist.length + 1);
    dispatch(setCurrentSong(playlist[randomIndex]));
    dispatch(createPlaylist({ playlist, index: randomIndex }));
  };

  const handleShuffle = () => {
    if (repeat) setRepeat(false);
    setIsShuffled(prev => !prev);
  };

  const handleRepeat = () => {
    if (isShuffled) setIsShuffled(false);
    setRepeat(prev => !prev);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(+e.currentTarget.value / 100);
    playerRef.current!.volume = volume;
  };

  const handleTimeUpdate = () => {
    const time = new Date(playerRef.current!.currentTime * 1000)
      .toISOString()
      .substring(14, 19);
    setCurrentTime(time);

    const currTime = playerRef.current?.currentTime;
    const maxDur = playerRef.current?.duration;

    setDurationPercent(+((currTime! / maxDur!) * 100).toFixed(2));
  };

  const handleChangeTime = (time: number) => {
    if (playerRef.current) playerRef.current.currentTime = time;
  };

  return (
    <div className={styles.player}>
      <div className={styles.controls}>
        <img onClick={handlePrevSong} src="/prev-song.svg" />
        <div onClick={handlePlayPause}>
          {isPlaying && <AiOutlinePause className={styles.icon} />}
          {!isPlaying && <BsPlayFill className={styles.icon} />}
        </div>
        <img onClick={handleNextSong} src="/next-song.svg" />
      </div>
      <div className={styles['song-details']}>
        <img
          src={currentSong?.images?.coverart || '/album-4.png'}
          className={isPlaying ? styles.spinning : ''}
        />
        <div className={styles['song-labels']}>
          <p>{currentSong?.title || 'A Wonderful Time'}</p>
          <p>{currentSong?.subtitle || 'Selena Gomez'}</p>
        </div>
      </div>
      <div className={styles.duration}>
        <DurationBar
          currentTime={durationPercent || 0}
          changeTime={handleChangeTime}
          durationTime={playerRef.current?.duration || 0}
        />
        <p>
          {currentTime} <span>/ {songDuration}</span>
        </p>
      </div>
      <div className={styles.buttons}>
        <ShuffledIcon onClick={() => handleShuffle()} active={isShuffled} />
        <RepeatIcon onClick={() => handleRepeat()} active={repeat} />
        <div
          onClick={() => setOpenVolume(prev => !prev)}
          className={styles.volume}
        >
          {openVolume && (
            <div ref={sliderRef} className={styles['volume-slider']}>
              <input
                value={volume * 100}
                onChange={e => handleVolumeChange(e)}
                type="range"
                className={styles.slider}
              />
            </div>
          )}
          <img src="/volume-icon.svg" />
        </div>
        <AddToFavouritesIcon
          onClick={() => handleAddToFavourites()}
          active={isFavourite}
        />
      </div>
      <audio
        ref={playerRef}
        src={activeSong}
        loop={repeat}
        onEnded={isShuffled ? handleNextSongShuffled : handleNextSong}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};

export default Player;
