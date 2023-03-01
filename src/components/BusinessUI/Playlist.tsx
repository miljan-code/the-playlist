import { useEffect, useState } from 'react';
import {
  AlbumType,
  SongType,
  topAlbums,
  topSongs,
} from '../../constants/playlists';
import styles from './Playlist.module.css';
import Song from './Song';

type Props = {
  label: string;
};

const Playlist = ({ label }: Props) => {
  const [playlist, setPlaylist] = useState<AlbumType[] | SongType[]>([]);

  useEffect(() => {
    if (label === 'songs') setPlaylist(topSongs);
    else setPlaylist(topAlbums);

    return () => setPlaylist([]);
  }, [label]);

  return (
    <div className={styles.playlist}>
      <h2 className={styles.label}>
        {label === 'songs' ? 'Top Songs' : 'Top Albums'}
      </h2>
      <div className={styles['song-list']}>
        {playlist.map((data, i) => (
          <Song key={crypto.randomUUID()} data={data} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
