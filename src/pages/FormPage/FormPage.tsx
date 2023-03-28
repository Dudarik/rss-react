import React, { useState } from 'react';

import styles from './FormPage.module.scss';
import FormAddCard from '../../components/FormAddCard';
import CardsList from '../../components/CardsList';

import { IGameData, IGamesData, IPublisher } from '../../interfaces/cardsIterfaces';
import { getGamesData } from '../../helpers';
import { IPageProps } from 'interfaces/pagesInterfaces';

const FormPage = (props: IPageProps) => {
  const { pageTitle = 'untitled', setCurrentPageTitle } = props;

  if (setCurrentPageTitle) setCurrentPageTitle(pageTitle);

  const [state, setState] = useState<IGamesData>({
    publishers: getGamesData('publishers') as IPublisher[],
    games: [],
  });

  const addNewCard = (newGame: IGameData) => {
    const { games } = state;
    games.push(newGame);
    setState({ ...state, games });
  };

  return (
    <main className={styles.main}>
      <h2>Add new card</h2>
      <FormAddCard addNewCard={addNewCard} />
      {state.games.length ? <CardsList {...state} /> : <h2>No cards added</h2>}
    </main>
  );
};

export default FormPage;
