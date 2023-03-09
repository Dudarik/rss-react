import { IGameData } from '../../interfaces/cardsIterfaces';
import React, { Component, ReactNode } from 'react';

const PATH_TO_IMG = 'assets/images/games_webp/';
class Card extends Component<IGameData> {
  constructor(props: IGameData) {
    super(props);
  }
  render(): ReactNode {
    const { title, image } = this.props;
    const url = new URL(location.href);
    const host = url.host;
    const protocol = url.protocol;
    const imgUrl = new URL(`${protocol}://${host}/${PATH_TO_IMG}${image}`);

    return (
      <li className="card">
        <img src={imgUrl.toString()} alt={title} />
      </li>
    );
  }
}

export default Card;
