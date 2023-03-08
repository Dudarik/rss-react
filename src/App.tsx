import React, { Component } from 'react';

import Header from '@/components/Header';
import Router from '@/Router';

import AppStyles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={AppStyles.App}>
          <Router />
        </div>
        <footer></footer>
      </>
    );
  }
}
export default App;
