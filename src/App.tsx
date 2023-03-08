import React, { Component } from 'react';

import AppStyles from './App.module.scss';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={AppStyles.App}></div>
        <footer></footer>
      </>
    );
  }
}
export default App;
