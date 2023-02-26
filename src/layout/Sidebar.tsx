import styles from './Sidebar.module.css';
import { Navigation } from '.';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/logo.svg" />
        <h1>THE PLAYLIST</h1>
      </div>
      <Navigation />
      <div className={styles.profile}>
        <img src="/avatar.svg" />
        <p>Elsie Saunders</p>
        <img src="/arrow.svg" />
      </div>
    </aside>
  );
};

export default Sidebar;
