import { AlbumType, SongType } from '../../constants/playlists';
import styles from './Song.module.css';

type SongProps = {
  data: SongType | AlbumType;
  index: number;
};

type SongTemplateProps = {
  cover: string;
  label: string;
  sublabel: string;
  songNumber: string;
  songLength?: string;
};

const SongTemplate = ({
  cover,
  label,
  sublabel,
  songLength,
  songNumber,
}: SongTemplateProps) => (
  <div className={styles.song}>
    <div className={styles.details}>
      <p>{songNumber}</p>
      <span>+</span>
      <img src={cover} />
      <div className={styles.labels}>
        <p>{label}</p>
        <p>{sublabel}</p>
      </div>
    </div>
    <div className={styles.options}>
      {songLength && <p>{songLength}</p>}
      <div className={styles.dots}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
    </div>
  </div>
);

const Song = ({ data, index }: SongProps) => {
  const songNumber = index < 10 ? `0${index}` : `${index}`;

  if ('length' in data)
    return (
      <SongTemplate
        songNumber={songNumber}
        cover={data.cover}
        label={data.title}
        sublabel={data.album}
        songLength={data.length}
      />
    );

  return (
    <SongTemplate
      songNumber={songNumber}
      cover={data.cover}
      label={data.title}
      sublabel={data.artist}
    />
  );
};

export default Song;
