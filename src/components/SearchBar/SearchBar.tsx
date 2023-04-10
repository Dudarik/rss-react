import React, { ChangeEvent, FormEvent } from 'react';

import styles from './SearchBar.module.scss';

interface ISearchProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  handlerSubmitBtnClick: (event: FormEvent) => void;
}

const SearchBar = (props: ISearchProps) => {
  const { searchString, setSearchString, handlerSubmitBtnClick } = props;

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    setSearchString(target.value);
  };

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
