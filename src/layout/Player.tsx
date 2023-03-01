import { AiOutlinePause } from 'react-icons/ai';
import { DurationBar } from './Icons';
import styles from './Player.module.css';

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.controls}>
        <img src="/prev-song.svg" />
        <div>
          <AiOutlinePause className={styles.icon} />
        </div>
        <img src="/next-song.svg" />
      </div>
      <div className={styles['song-details']}>
        <img src="/album-4.png" />
        <div className={styles['song-labels']}>
          <p>Come & Get It</p>
          <p>Selena Gomez</p>
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
    </div>
  );
};

export default Player;
