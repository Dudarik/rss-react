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
    const cardsData = getGamesData();

    if (cardsData === undefined) throw new Error(`Can't load data from DB`);

    this.setState(cardsData);
  }
  render(): ReactNode {
    return (
      <ul className={styles.card_list}>
        {this.state.games.map((gameCard) => {
          const publisher = this.state.publishers.find(
            (publisher) => publisher.id === gameCard.publisher
          );
          let publisherImage = '';
          let publisherTitle = '';

          if (publisher !== undefined) {
            publisherImage = publisher.img;
            publisherTitle = publisher.title;
          }

          const cardData = Object.assign(gameCard, { publisherImage, publisherTitle });

          return <Card key={gameCard.id} {...cardData} />;
        })}
      </ul>
    );
  }
}

export default CardsList;
