import { useEffect, useRef } from 'react';
import { Album } from '../../components';
import { useSongsData } from '../../redux/shazamApi';
import styles from './Albums.module.css';

const Albums = () => {
  const data = useSongsData({ type: 'top-charts', num: 12, randomize: true });
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleHorizontalScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) divRef.current!.scrollLeft += 50;
      else divRef.current!.scrollLeft -= 50;
    };

    // TODO: Check when scroll is to the end and then stop preventing default for better UX

    divRef.current?.addEventListener('wheel', handleHorizontalScroll);

    return () =>
      divRef.current?.removeEventListener('wheel', handleHorizontalScroll);
  }, []);

  return (
    <div className={styles.albums}>
      <p className={styles.label}>Recommended for you</p>
      <div ref={divRef} className={styles['album-list']}>
        {/* TODO: can you fetch albums? */}
        {data?.map((item, i) => (
          <Album
            key={crypto.randomUUID()}
            // TODO: change /album-1 to more generic one
            song={item}
            playlist={data}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Albums;
