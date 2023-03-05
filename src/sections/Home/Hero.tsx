import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.badge}>
        <p>Party Collection</p>
      </div>
      <h1 className={styles.title}>
        The 2023
        <br />
        Summer Playlist
      </h1>
      <div className={styles.buttons}>
        <Link to="/recommended">
          <div className={styles.cta}>
            <p>Explore</p>
            <img src="/arrow-right.svg" />
          </div>
        </Link>
        {/* <div className={styles['small-btns']}>
          <div className={styles['small-btn']}>
            <img src="/bookmark-icon.svg" />
          </div>
          <div className={styles['small-btn']}>
            <img src="/share-icon.svg" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
