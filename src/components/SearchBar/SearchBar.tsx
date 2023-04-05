import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

import styles from './SearchBar.module.scss';

interface ISearchProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  handlerSubmitBtnClick: (event: FormEvent) => void;
}

const SearchBar = (props: ISearchProps) => {
  const { searchString, setSearchString, handlerSubmitBtnClick } = props;
  // const [searchString, setSearchString] = useState('');

  // const searchStringRef = useRef<string>();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    setSearchString(target.value);
  };

  // useEffect(() => {
  //   searchStringRef.current = searchString;
  // }, [searchString]);

  // useEffect(() => {
  //   const lsSearchString = localStorage.getItem(LS_KEY);

  //   if (lsSearchString) setSearchString(lsSearchString);

  //   return () => {
  //     localStorage.setItem(LS_KEY, String(searchStringRef.current));
  //   };
  // }, []);

  return (
    <form className={styles.search_form} onSubmit={handlerSubmitBtnClick}>
      <input
        type="search"
        name="searchString"
        id="searchString"
        placeholder="input search string"
        onChange={handleChangeInput}
        value={searchString}
        className={styles.search_input}
      />
      <button type="submit" className={styles.search_button} title="search">
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
