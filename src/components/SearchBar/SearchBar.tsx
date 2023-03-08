import React, { ChangeEvent, Component, MouseEvent } from 'react';

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

  render() {
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
