import styles from './Search.module.css';

const Search = () => {
  return (
    <form className={styles.form}>
      <img src="/search-icon.svg" />
      <input type="text" placeholder="Search..." />
    </form>
  );
};

export default Search;
