import { IGamesData } from '../../interfaces/cardsIterfaces';

import React, { useState } from 'react';

import Card from '../Card';

import styles from './CardList.module.scss';
import Modal from '../Modal';

const CardList = (props: IGamesData) => {
  const { games, publishers } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentGameId, setCurrentGameId] = useState(-1);

  const openModal = (gameId: number) => {
    setCurrentGameId(gameId);
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal {...{ currentGameId, isModalOpen, setIsModalOpen }}></Modal>
      <ul className={styles.card_list}>
        {games.map((gameCard) => {
          const publisher = publishers.find((publisher) => publisher.id === gameCard.publisher);
          let publisherImage = '';
          let publisherTitle = '';

          if (publisher !== undefined) {
            publisherImage = publisher.img;
            publisherTitle = publisher.title;
          }

          const cardData = Object.assign({}, { ...gameCard, publisherImage, publisherTitle });

          return <Card key={gameCard.id} {...{ ...cardData, openModal }} />;
        })}
      </ul>
    </>
  );
};

export default CardList;
