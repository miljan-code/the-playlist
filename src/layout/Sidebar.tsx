import { Link } from 'react-router-dom';
import { Navigation } from '.';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <Link to="/">
        <div className={styles.logo}>
          <img src="/logo.svg" />
          <h2>THE PLAYLIST</h2>
        </div>
      </Link>
      <Navigation />
      {/* <div className={styles.profile}>
        <img src="/avatar.svg" />
        <p>Elsie Saunders</p>
        <img src="/arrow.svg" />
      </div> */}
    </aside>
  );
};

export default Sidebar;
