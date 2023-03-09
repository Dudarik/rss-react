import React, { ChangeEvent, Component, MouseEvent, ReactNode } from 'react';

const LS_KEY = 'dudarik_rss_react_searchString';

class SearchBar extends Component {
  state = {
    searchString: '',
  };

  handleSearchBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    console.log(this.state.searchString);
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
      <form>
        <input
          type="text"
          name="searchString"
          id="searchString"
          placeholder="input serch string"
          onChange={this.handleChangeInput}
          value={this.state.searchString}
        />
        <button onClick={this.handleSearchBtnClick}>Serach</button>
      </form>
    );
  }
}

export default SearchBar;
