import { useState, useEffect } from 'react';
import { useSongsData } from '../../redux/shazamApi';
import Song from './Song';
import Flags from 'country-flag-icons/react/3x2';
import styles from './TracksByCountry.module.css';

const TracksByCountry = () => {
  const [country, setCountry] = useState('');
  const playlist = useSongsData({ type: 'top-charts', num: 20 });

  const Flag = Flags[country as keyof typeof Flags];

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${
        import.meta.env.VITE_GEO_API
      }`
    )
      .then(res => res.json())
      .then(data => {
        setCountry(data.location.country);
      });
  }, []);

  return (
    <div className={styles.playlist}>
      <h2 className={styles.label}>
        Trending In Your Country
        {Flag && <Flag className={styles.flag} />}
      </h2>
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

export default TracksByCountry;
