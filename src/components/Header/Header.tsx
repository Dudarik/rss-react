import React, { Component } from 'react';

import MainNav from '../MainNav';

import styles from './header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.logo}>RSS-React</h1>
        <MainNav />
      </header>
    );
  }
}

export default Header;
