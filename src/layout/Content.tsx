import styles from './Content.module.css';

const Content = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.content}>{children}</main>;
};

export default Content;
