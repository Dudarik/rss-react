import React, { Component } from 'react';

import MainNav from './components/MainNav';

import AppStyles from './App.module.scss';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <MainNav />
          <Router />
        </header>
        <div className={AppStyles.App}></div>
        <footer></footer>
      </>
    );
  }
}
export default App;
