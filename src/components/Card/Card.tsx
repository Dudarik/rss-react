import { IGameData } from '../../interfaces/cardsIterfaces';

import React from 'react';

import { Link } from 'react-router-dom';

import GameInfo from '../GameInfo';

import styles from './Card.module.scss';

const PATH_TO_GAME_IMG = 'assets/images/games_webp/';
const PATH_TO_PUBLISHER_IMG = 'assets/images/publishers_webp/';

interface ICardProps extends IGameData {
  publisherImage: string;
  publisherTitle: string;
}

const Card = (props: ICardProps) => {
  const {
    id,
    title,
    releaseDate,
    players,
    scoreBGG,
    scoreTesera,
    age,
    playingTime,
    lang,
    image,
    game: isGame,
    publisherImage,
    publisherTitle,
    blobImg,
  } = props;

  return (
    <li className={styles.card}>
      <div className={styles.image}>
        {blobImg ? (
          <img src={image} alt={title} width="200" />
        ) : (
          <img src={PATH_TO_GAME_IMG + image} alt={title} width="200" />
        )}
      </div>
      <Link to={`products/${id}`} className={styles.card_title}>
        {title}
      </Link>
      <div>{isGame ? 'Игра' : 'Дполнение к игре'}</div>

      <div className={styles.rating}>
        BGG: <span>{scoreBGG}</span>
        <pre> | </pre>Tesera: <span>{scoreTesera}</span>
      </div>

      <div className={styles.publisher}>
        <img src={PATH_TO_PUBLISHER_IMG + publisherImage} alt={publisherTitle} />
      </div>
      <GameInfo {...{ releaseDate, players, age, playingTime, lang }} />
    </li>
  );
};

export default Card;
