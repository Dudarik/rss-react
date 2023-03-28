import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import styles from './SearchBar.module.scss';

const LS_KEY = 'dudarik_rss_react_searchString';

const SearchBar = () => {
  const [searchString, setSearchString] = useState('');

  const searchStringRef = useRef<string>();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    setSearchString(target.value);
  };

  useEffect(() => {
    searchStringRef.current = searchString;
  }, [searchString]);

  useEffect(() => {
    const lsSearchString = localStorage.getItem(LS_KEY);

    if (lsSearchString) setSearchString(lsSearchString);

    return () => {
      localStorage.setItem(LS_KEY, String(searchStringRef.current));
    };
  }, []);

  return (
    <form className={styles.search_form}>
      <input
        type="search"
        name="searchString"
        id="searchString"
        placeholder="input search string"
        onChange={handleChangeInput}
        value={searchString}
        className={styles.search_input}
      />
      <button className={styles.search_button} title="search">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
