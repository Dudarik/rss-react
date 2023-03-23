import Page from '../Page';
import React, { ReactNode } from 'react';

import styles from './FormPage.module.scss';
import FormAddCard from '../../components/FormAddCard';
import CardsList from '../../components/CardsList';

import { IGameData, IGamesData, IPublisher } from '../../interfaces/cardsIterfaces';
import { getGamesData } from '../../helpers';

type TFormPageState = {
  cardsData: IGamesData;
};

class FormPage extends Page {
  state: TFormPageState = {
    cardsData: {
      publishers: getGamesData('publishers') as IPublisher[],
      games: [],
    },
  };

  addNewCard = (newGame: IGameData) => {
    const { games } = this.state.cardsData;
    games.push(newGame);
    this.setState({ games });
  };

  render(): ReactNode {
    return (
      <main className={styles.main}>
        <h2>Add new card</h2>
        <FormAddCard addNewCard={this.addNewCard} />
        {this.state.cardsData.games.length ? (
          <CardsList {...this.state.cardsData} />
        ) : (
          'No cards added'
        )}
      </main>
    );
  }
}

export default FormPage;
