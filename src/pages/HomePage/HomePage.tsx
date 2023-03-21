import { IGamesData } from '../../interfaces/cardsIterfaces';

import CardsList from '../../components/CardsList';
import SearchBar from '../../components/SearchBar';
import React from 'react';

import Page from '../Page';
import { getGamesData } from '../../helpers';

import styles from './HomePage.module.scss';

class HomePage extends Page {
  render() {
    const cardsData = getGamesData() as IGamesData;
    return (
      <main className={styles.main}>
        <h2>
          This is a <span className="pageTitle">{this.pageTitle}</span> page
        </h2>
        <SearchBar />
        <CardsList {...cardsData} />
      </main>
    );
  }
}

export default HomePage;
