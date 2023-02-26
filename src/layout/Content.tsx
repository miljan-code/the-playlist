import styles from './Content.module.css';

const Content = ({ children }: { children: JSX.Element }) => {
  return <main className={styles.content}>{children}</main>;
};

export default Content;
