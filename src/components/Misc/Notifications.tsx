import styles from './Notifications.module.css';

const Notifications = () => {
  return (
    <div className={styles.notifications}>
      <span>0</span>
      <img src="/notification-bell-icon.svg" />
    </div>
  );
};

export default Notifications;
