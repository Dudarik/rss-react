import { IGameData } from '../../interfaces/cardsIterfaces';

import React, { Component, ReactNode } from 'react';

import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

const PATH_TO_GAME_IMG = 'assets/images/games_webp/';
const PATH_TO_PUBLISHER_IMG = 'assets/images/publishers_webp/';

interface ICardProps extends IGameData {
  publisherImage: string;
  publisherTitle: string;
}

class Card extends Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }
  componentDidMount(): void {}
  render(): ReactNode {
    // console.log(this.props);
    const { id, title, players, age, playingTime, lang, image, publisherImage, publisherTitle } =
      this.props;

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
        <div className={styles.image}>
          <img src={PATH_TO_GAME_IMG + image} alt={title} width="200" />
        </div>
        <Link to={`products/${id}`} className={styles.card_title}>
          {title}
        </Link>

        <div className={styles.publisher}>
          <img src={PATH_TO_PUBLISHER_IMG + publisherImage} alt={publisherTitle} />
        </div>

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
