import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainNav from '../MainNav';

import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Link to="/">
          <h1 className={styles.logo}>RSS-React</h1>
        </Link>
        <MainNav />
      </header>
    );
  }
}

export default Header;
