import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { useSongsData } from '../redux/shazamApi';
import { SongObject } from '../model/types';
import { Song, Chart } from '../components';
import styles from './History.module.css';

const Favourites = () => {
  const playlist = useSongsData({ type: 'top-charts', n: 20 });
  const { favourites: favsHistory } = useAppSelector(state => state.tracks);

  useEffect(() => {}, [favsHistory]);

  const favourites: SongObject[] =
    JSON.parse(localStorage.getItem('favourites')!) || [];

  return (
    <div className={styles.history}>
      {favourites.length > 0 ? (
        <div>
          <p className={styles.date}>Your favourites</p>
          <div>
            {favourites.map((item, i) => (
              <Song key={item.key} data={item} index={i} playlist={playlist} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <p className={styles.nohistory}>
            There is no favourites... Add some songs in your favourites and they
            will show up here!
          </p>

          <Chart label="Recommended for you" playlist={playlist} />
        </>
      )}
    </div>
  );
};

export default Favourites;
