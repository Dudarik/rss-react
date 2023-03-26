import React, { Component, ReactNode } from 'react';

import styles from './GameInfo.module.scss';

interface IGameInfoProps {
  releaseDate: string;
  players: string;
  age: number;
  playingTime: string;
  lang: string;
}

class GameInfo extends Component<IGameInfoProps> {
  render(): ReactNode {
    const { releaseDate, players, age, playingTime, lang } = this.props;
    const infoData = [
      {
        icon: 'fa-solid fa-person',
        title: 'Кол-во игроков:',
        title_info: players,
      },
      {
        icon: 'fa-solid fa-clock',
        title: 'Время партии:',
        title_info: `${playingTime} мин.`,
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
      {
        icon: 'fa-solid fa-calendar-days',
        title: 'Дата релиза:',
        title_info: releaseDate,
      },
    ];
    return (
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
    );
  }
}

export default GameInfo;
