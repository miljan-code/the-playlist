import styles from './RootLayout.module.css';
import { Sidebar, Content, Player } from '.';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Content>
        <Outlet />
        <Player />
      </Content>
    </div>
  );
};

export default RootLayout;
