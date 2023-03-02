import { Album } from '../../components';
import styles from './Albums.module.css';
import { useGetTopChartsQuery } from '../../redux/shazamApi';
import { useEffect, useRef } from 'react';

const Albums = () => {
  const { data } = useGetTopChartsQuery(12);
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
      <p className={styles.label}>Recommended Songs</p>
      <div ref={divRef} className={styles['album-list']}>
        {/* TODO: change to Songs instead of Albums */}
        {data?.map(item => (
          <Album
            key={crypto.randomUUID()}
            // TODO: change /album-1 to more generic one
            cover={item.images?.coverart || '/album-1.png'}
            title={item.title}
            artist={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Albums;
