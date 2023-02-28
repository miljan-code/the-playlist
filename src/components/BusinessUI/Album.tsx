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
      <img src={cover} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
};

export default Album;
