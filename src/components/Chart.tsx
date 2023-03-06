import Song from './Song';
import { SongObject } from '../model/types';
import styles from './Chart.module.css';

type Props = {
  playlist: SongObject[];
  label: string;
};

const Chart = ({ playlist, label }: Props) => {
  return (
    <div className={styles.playlist}>
      <h2 className={styles.label}>{label}</h2>
      <div className={styles['song-list']}>
        {playlist?.map((data, i) => (
          <Song
            key={crypto.randomUUID()}
            data={data}
            index={i}
            playlist={playlist}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
