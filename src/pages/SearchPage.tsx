import { useLocation } from 'react-router-dom';
import { useSearchSongData, useSongsData } from '../redux/shazamApi';
import { Album, Search } from '../components';
import styles from './SearchPage.module.css';

const SearchPage = () => {
  const location = useLocation();
  const data = useSearchSongData(location.state.term);
  const playlist = useSongsData({ type: 'top-charts' });

  return (
    <div className={styles.search}>
      <div className={styles.searchbar}>
        <Search />
      </div>
      <div className={styles.list}>
        {data.length > 0 &&
          data.map((item, i) => (
            <Album key={item.key} song={item} index={i} playlist={playlist} />
          ))}
        {data.length === 0 && (
          <p className={styles.nosongs}>No songs found... :(</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
