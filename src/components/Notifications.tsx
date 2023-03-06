import { useState, useRef, useEffect } from 'react';
import styles from './Notifications.module.css';

type PopupType = {
  handlePopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popup = ({ handlePopup }: PopupType) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // handles click outside of notification and closes it
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        handlePopup(false);
      }
    };

    window.addEventListener('click', handleClickOutside, true);

    return () => window.removeEventListener('click', handleClickOutside, true);
  }, []);

  return (
    <div ref={popupRef} className={styles.popup}>
      <p>No notifications...</p>
    </div>
  );
};

const Notifications = () => {
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <div className={styles.notifications}>
      {openNotifications && <Popup handlePopup={setOpenNotifications} />}
      <div
        onClick={() => setOpenNotifications(prev => !prev)}
        className={styles.wrapper}
      >
        <span>0</span>
        <img src="/notification-bell-icon.svg" />
      </div>
    </div>
  );
};

export default Notifications;
