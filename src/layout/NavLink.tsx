import styles from './NavLink.module.css';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  label: string;
  link: string;
  Icon: ({ active }: { active: boolean }) => JSX.Element;
};

const NavLink = ({ label, link, Icon }: Props) => {
  const { pathname } = useLocation();
  const isActive = pathname === link;

  return (
    <Link to={link} className={styles.link}>
      <div className={`${isActive ? styles.active : styles.inactive}`} />
      <div className={styles.icon}>
        <Icon active={isActive} />
      </div>
      <p className={`${isActive ? styles['label-active'] : styles.label}`}>
        {label}
      </p>
    </Link>
  );
};

export default NavLink;
