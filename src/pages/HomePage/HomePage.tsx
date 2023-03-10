import CardsList from '../../components/CardsList';
import SearchBar from '../../components/SearchBar';
import React, { Component } from 'react';

import styles from './HomePage.module.scss';

class HomePage extends Component {
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
