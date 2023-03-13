import CardsList from '../../components/CardsList';
import SearchBar from '../../components/SearchBar';
import React from 'react';

import styles from './HomePage.module.scss';
import Page from '../Page';

class HomePage extends Page {
  render() {
    return (
      <main className={styles.main}>
        <h2>This is a HOME page</h2>
        <SearchBar />
        <CardsList />
      </main>
    );
  }
}

export default HomePage;
