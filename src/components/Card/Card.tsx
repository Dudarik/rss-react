import { IGameData } from '../../interfaces/cardsIterfaces';

import React, { Component, ReactNode } from 'react';

import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

const PATH_TO_IMG = 'assets/images/games_webp/';

class Card extends Component<IGameData> {
  constructor(props: IGameData) {
    super(props);
  }
  render(): ReactNode {
    const { id, title, players, age, playingTime, lang, image } = this.props;

    return (
      <li className={styles.card}>
        <img src={PATH_TO_IMG + image} alt={title} width="200" />
        <Link to={`products/${id}`} className={styles.card_title}>
          {title}
        </Link>
        <div className={styles.info}>
          <span>
            <i className="fa-solid fa-person"></i> Кол-во игроков: {players}
          </span>
          <span>
            <i className="fa-solid fa-clock"></i> Время партии: {playingTime} мин.
          </span>
          <span>
            <i className="fa-solid fa-child-reaching"></i> Возраст: от {age} лет
          </span>
          <span>
            <i className="fa-solid fa-language"></i> Язык: {lang}
          </span>
        </div>
      </li>
    );
  }
}

export default Card;
