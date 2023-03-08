import React, { Component } from 'react';

import MainNav from '../MainNav';
import Router from '../../Router';

class Header extends Component {
  render() {
    return (
      <header>
        <MainNav />
        <Router />
      </header>
    );
  }
}

export default Header;
