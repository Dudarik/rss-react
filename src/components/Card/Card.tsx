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

    const infoData = [
      {
        icon: 'fa-solid fa-person',
        title: 'Кол-во игроков:',
        title_info: players,
      },
      {
        icon: 'fa-solid fa-clock',
        title: 'Время партии:',
        title_info: playingTime,
      },
      {
        icon: 'fa-solid fa-child-reaching',
        title: 'Возраст:',
        title_info: `от ${age} лет`,
      },
      {
        icon: 'fa-solid fa-language',
        title: 'Язык:',
        title_info: lang,
      },
    ];

    return (
      <li className={styles.card}>
        <img src={PATH_TO_IMG + image} alt={title} width="200" />
        <Link to={`products/${id}`} className={styles.card_title}>
          {title}
        </Link>

        <div className={styles.info}>
          {infoData.map((infoItem) => {
            const { icon, title, title_info } = infoItem;
            return (
              <span className={styles.info_item} key={icon}>
                <i className={icon}></i> {title}
                <span className={styles.item_data}> {title_info}</span>
              </span>
            );
          })}
        </div>
      </li>
    );
  }
}

export default Card;
