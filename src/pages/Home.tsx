import { Albums, Header, Hero, Songs } from '../sections';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <Albums />
      <Songs />
    </div>
  );
};

export default Home;
