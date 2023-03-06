import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { useSongsData } from '../redux/shazamApi';
import { HistoryType } from '../model/types';
import { Song, Chart } from '../components';
import styles from './History.module.css';

const History = () => {
  const playlist = useSongsData({ type: 'top-charts', n: 20 });
  const { history: stateHistory } = useAppSelector(state => state.tracks);

  useEffect(() => {}, [stateHistory]);

  const history: HistoryType[] =
    JSON.parse(localStorage.getItem('history')!) || [];
  const dates = [...new Set(history.map(item => item.date))];

  return (
    <div className={styles.history}>
      {dates.length > 0 ? (
        dates.map(date => (
          <div key={date}>
            <p className={styles.date}>{date}</p>
            <div>
              {history
                .filter(item => item.date.includes(date))
                .map((item, i) => (
                  <Song
                    key={item.song.key}
                    data={item.song}
                    index={i}
                    playlist={playlist}
                  />
                ))}
            </div>
          </div>
        ))
      ) : (
        <>
          <p className={styles.nohistory}>
            There is no song history... Listen to some songs and they will show
            up here!
          </p>

          <Chart label="Recommended for you" playlist={playlist} />
        </>
      )}
    </div>
  );
};

export default History;
