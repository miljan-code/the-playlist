import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSongsData } from '../redux/shazamApi';
import { useAppDispatch } from '../redux/hooks';
import {
  createPlaylist,
  setCurrentSong,
  setPlaySong,
} from '../redux/tracksSlice';
import { Sidebar, Content, Player } from '.';
import { ToastContainer } from 'react-toastify';
import styles from './RootLayout.module.css';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const playlist = useSongsData({ type: 'top-charts' });

  useEffect(() => {
    dispatch(setCurrentSong(playlist[0]));
    dispatch(createPlaylist({ playlist, index: 0 }));
    dispatch(setPlaySong(false));
  }, []);

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
