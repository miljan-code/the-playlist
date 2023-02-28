import { Notifications, Search } from '../../components';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Search />
      <Notifications />
    </div>
  );
};

export default Header;
