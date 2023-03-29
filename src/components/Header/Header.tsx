import React from 'react';
import { Link } from 'react-router-dom';

import MainNav from '../MainNav';

import styles from './Header.module.scss';

export interface IHeadeeProps {
  pageTitle?: string;
}

const Header = (props: IHeadeeProps) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.logo}>RSS-React</h1>
      </Link>
      <h2>Current page: {props.pageTitle || 'untitled'}</h2>
      <MainNav />
    </header>
  );
};

export default Header;
