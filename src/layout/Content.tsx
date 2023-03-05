import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Content.module.css';

const Content = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // scrolls to the top of content element every time route changes
    mainRef.current!.scrollTop = 0;
  }, [location]);

  return (
    <main ref={mainRef} className={styles.content}>
      {children}
    </main>
  );
};

export default Content;
