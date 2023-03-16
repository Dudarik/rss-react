import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainNav from '../MainNav';

import styles from './Header.module.scss';

export interface IPageProps {
  pageTitle?: string;
}

class Header extends Component<IPageProps> {
  render() {
    return (
      <header className={styles.header}>
        <Link to="/">
          <h1 className={styles.logo}>RSS-React</h1>
        </Link>
        <h2>Current page: {this.props.pageTitle || 'untitled'}</h2>
        <MainNav />
      </header>
    );
  }
}

export default Header;
