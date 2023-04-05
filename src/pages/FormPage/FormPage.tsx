import { IGameData, IGamesData } from '../../interfaces/cardsIterfaces';
import { IPageProps } from '../../interfaces/pagesInterfaces';

import React, { useEffect, useState } from 'react';

import FormAddCard from '../../components/FormAddCard';
import CardsList from '../../components/CardsList';

import { getPublishers } from '../../helpers';

import styles from './FormPage.module.scss';

const FormPage = (props: IPageProps) => {
  const { pageTitle = 'untitled', setCurrentPageTitle } = props;
  const [state, setState] = useState<IGamesData>({
    publishers: [],
    games: [],
  });

  useEffect(() => {
    const fetchPublishers = async () => {
      const publishers = await getPublishers();
      const games: IGameData[] = [];
      setState({ games, publishers });
    };

    fetchPublishers();
  }, []);

  useEffect(() => {
    if (setCurrentPageTitle) setCurrentPageTitle(pageTitle);
  }, [setCurrentPageTitle, pageTitle]);

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
