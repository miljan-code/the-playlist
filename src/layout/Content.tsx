import styles from './Content.module.css';

// TODO: scroll to the top when route changes
const Content = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.content}>{children}</main>;
};

export default Content;
