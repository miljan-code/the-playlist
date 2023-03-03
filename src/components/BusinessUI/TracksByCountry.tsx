import { useState, useEffect } from 'react';
import styles from './TracksByCountry.module.css';
import Song from './Song';
import { useGetTracksByLocationQuery } from '../../redux/shazamApi';
import { availableCountries } from '../../constants/availableCountries';
import Flags from 'country-flag-icons/react/3x2';

const TracksByCountry = () => {
  const [location, setLocation] = useState('GB');
  const [country, setCountry] = useState('');
  const {
    data: playlist,
    isFetching,
    error,
  } = useGetTracksByLocationQuery(location);

  const Flag = Flags[country as keyof typeof Flags];

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${
        import.meta.env.VITE_GEO_API
      }`
    )
      .then(res => res.json())
      .then(data => {
        if (availableCountries.includes(data.location.country)) {
          setLocation(data.location.country);
        } else {
          setLocation('GB');
        }
        setCountry(data.location.country);
      });
  }, []);

  // TODO: Add Loading component when isFetching
  // TODO: Add error check

  return (
    <div className={styles.playlist}>
      <h2 className={styles.label}>
        Trending In Your Country
        {Flag && <Flag className={styles.flag} />}
      </h2>
      <div className={styles['song-list']}>
        {playlist?.map((data, i) => (
          <Song key={crypto.randomUUID()} data={data} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default TracksByCountry;
