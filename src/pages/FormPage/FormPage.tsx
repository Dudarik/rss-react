import { IGameData } from '../../interfaces/cardsIterfaces';
import { IPageProps } from '../../interfaces/pagesInterfaces';
import { TRootState } from '../../store';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import FormAddCard from '../../components/FormAddCard';
import CardsList from '../../components/CardsList';

import { useGetPublishersQuery } from '../../slices/apiSlice';

import styles from './FormPage.module.scss';

const FormPage = (props: IPageProps) => {
  const { pageTitle = 'untitled', setCurrentPageTitle } = props;

  useEffect(() => {
    if (setCurrentPageTitle) setCurrentPageTitle(pageTitle);
  }, [setCurrentPageTitle, pageTitle]);

  const { data: publishers } = useGetPublishersQuery('');
  const games = useSelector<TRootState, IGameData[]>((state) => state.games.games);

  const cardsData = { games, publishers: publishers || [] };

  return (
    <main className={styles.main}>
      <h2 className="pageTitle">Add new card</h2>
      <FormAddCard />
      {games.length ? <CardsList {...cardsData} /> : <h2>No cards added</h2>}
    </main>
  );
};

export default FormPage;
