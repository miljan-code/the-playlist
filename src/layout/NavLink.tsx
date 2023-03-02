import styles from './NavLink.module.css';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
  Icon: ({ active }: { active: boolean }) => JSX.Element;
  link: string;
};

const NavLink = ({ label, isActive, setIsActive, Icon, link }: Props) => {
  return (
    // FIXME: change active state based on routes url
    <Link onClick={() => setIsActive(label)} to={link} className={styles.link}>
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
