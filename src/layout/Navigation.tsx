import { useState } from 'react';
import styles from './Navigation.module.css';
import { NavLink } from '.';
import { browseMusic, yourMusic } from '../constants/navLinks';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <nav className={styles.navigation}>
      <p className={styles.label}>Browse Music</p>
      <div className={styles.links}>
        {browseMusic.map(item => (
          <NavLink
            key={crypto.randomUUID()}
            label={item.label}
            isActive={item.label === activeLink}
            setIsActive={setActiveLink}
            Icon={item.icon}
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
            isActive={item.label === activeLink}
            setIsActive={setActiveLink}
            Icon={item.icon}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;