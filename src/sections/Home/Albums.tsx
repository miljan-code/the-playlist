import { useEffect, useRef } from 'react';
import { useSongsData } from '../../redux/shazamApi';
import { Album } from '../../components';
import styles from './Albums.module.css';

const Albums = () => {
  const data = useSongsData({ type: 'top-charts2', n: 12 });
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleHorizontalScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) divRef.current!.scrollLeft += 50;
      else divRef.current!.scrollLeft -= 50;
    };

    divRef.current?.addEventListener('wheel', handleHorizontalScroll);

    return () =>
      divRef.current?.removeEventListener('wheel', handleHorizontalScroll);
  }, []);

  return (
    <div className={styles.albums}>
      <p className={styles.label}>Recommended for you</p>
      <div ref={divRef} className={styles['album-list']}>
        {data?.map((item, i) => (
          <Album
            key={crypto.randomUUID()}
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
