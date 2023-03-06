import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { browseMusic, yourMusic } from '../constants/navLinks';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mobilemenu}>
      <div onClick={() => setIsOpen(prev => !prev)} className={styles.icon}>
        {!isOpen ? (
          <AiOutlineMenu className={styles.hamburger} />
        ) : (
          <AiOutlineClose className={styles.hamburger} />
        )}
      </div>
      {isOpen && (
        <div className={styles.menu}>
          {[...browseMusic, ...yourMusic].map(item => (
            <Link
              key={crypto.randomUUID()}
              to={item.link}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
