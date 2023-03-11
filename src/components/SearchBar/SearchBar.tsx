import React, { ChangeEvent, Component, MouseEvent, ReactNode } from 'react';

import styles from './SearchBar.module.scss';

const LS_KEY = 'dudarik_rss_react_searchString';

class SearchBar extends Component {
  state = {
    searchString: '',
  };

  handleSearchBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    console.log(this.state.searchString);
    this.setState({ searchString: '' });
  };

  handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;

    this.setState({ [target.name]: target.value });
  };

  componentDidMount = () => {
    const lsSearchString = localStorage.getItem(LS_KEY);

    if (lsSearchString) this.setState({ searchString: lsSearchString });
  };

  componentWillUnmount = () => {
    if (this.state.searchString.length > 0) localStorage.setItem(LS_KEY, this.state.searchString);
  };

  render(): ReactNode {
    return (
      <form className={styles.search_form}>
        <input
          type="text"
          name="searchString"
          id="searchString"
          placeholder="input search string"
          onChange={this.handleChangeInput}
          value={this.state.searchString}
          className={styles.search_input}
        />
        <button onClick={this.handleSearchBtnClick} className={styles.search_button} title="search">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
