import { browseMusic, yourMusic } from '../constants/navLinks';
import { NavLink } from '.';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <p className={styles.label}>Browse Music</p>
      <div className={styles.links}>
        {browseMusic.map(item => (
          <NavLink
            key={crypto.randomUUID()}
            label={item.label}
            Icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
      <div className={styles.divider} />
      <p className={styles.label}>Your Music</p>
      <div className={styles.links}>
        {yourMusic.map(item => (
          <NavLink
            key={crypto.randomUUID()}
            label={item.label}
            Icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
