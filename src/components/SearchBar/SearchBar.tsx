import React, { ChangeEvent, FormEvent, useState } from 'react';

import styles from './SearchBar.module.scss';
import { useDispatch } from 'react-redux';

import { addSearchString } from '../../slices/gameSlice';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';

const SearchBar = () => {
  const initialState = useSelector<TRootState>((state) => state.games.searchString) as string;

  const [searchString, setSearchString] = useState(initialState);

  const dispatch = useDispatch();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    setSearchString(target.value);
  };

  const handlerSubmitBtnClick = async (event: FormEvent) => {
    event.preventDefault();

    dispatch(addSearchString(searchString.trim()));
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
