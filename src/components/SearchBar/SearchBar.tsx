import React, { ChangeEvent, Component, ReactNode } from 'react';

import styles from './SearchBar.module.scss';

const LS_KEY = 'dudarik_rss_react_searchString';

class SearchBar extends Component {
  state = {
    searchString: '',
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
    localStorage.setItem(LS_KEY, this.state.searchString);
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
        <button className={styles.search_button} title="search">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
