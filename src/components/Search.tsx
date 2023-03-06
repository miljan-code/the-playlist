import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.css';

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim().length < 1) return;
    setSearchTerm('');
    const param = searchTerm.toLowerCase().replaceAll(' ', '-');
    navigate(`/search?=${param}`, { state: { term: searchTerm } });
  };

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <img src="/search-icon.svg" />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default Search;
