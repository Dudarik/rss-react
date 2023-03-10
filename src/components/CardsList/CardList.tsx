import { getGamesData } from '../../helpers';

import { IGamesData } from '../../interfaces/cardsIterfaces';

import React, { Component, ReactNode } from 'react';

import Card from '../Card';

import styles from './CardList.module.scss';

class CardsList extends Component {
  state: IGamesData = {
    publishers: [],
    games: [],
  };

  componentDidMount() {
    try {
      const cardsData = getGamesData();

      if (cardsData === undefined) throw new Error(`Can't load data from DB`);

      this.setState(cardsData);
    } catch (error) {
      console.log(error);
    }
  }
  render(): ReactNode {
    return (
      <ul className={styles.card_list}>
        {this.state.games.map((gameCard) => (
          <Card key={gameCard.id} {...gameCard} />
        ))}
      </ul>
    );
  }
}

export default CardsList;
