import styles from './RootLayout.module.css';
import { Sidebar, Content, Player } from '.';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Content>
        <Outlet />
        <Player />
        <ToastContainer
          theme="light"
          autoClose={2000}
          style={{ fontSize: '18px' }}
        />
      </Content>
    </div>
  );
};

export default RootLayout;
