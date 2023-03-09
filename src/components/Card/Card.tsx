import { IGameData } from '@/interfaces/cardsIterfaces';
import React, { Component, ReactNode } from 'react';

class Card extends Component<IGameData> {
  constructor(props: IGameData) {
    super(props);
  }
  render(): ReactNode {
    const { title } = this.props;
    return <li className="card">{title}</li>;
  }
}

export default Card;
