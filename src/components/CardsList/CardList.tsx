import { IGamesData } from '../../interfaces/cardsIterfaces';

import React from 'react';

import Card from '../Card';

import styles from './CardList.module.scss';

const CardList = (props: IGamesData) => {
  const { games, publishers } = props;

  return (
    <ul className={styles.card_list}>
      {games.map((gameCard) => {
        const publisher = publishers.find((publisher) => publisher.id === gameCard.publisher);
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
};

export default CardList;
