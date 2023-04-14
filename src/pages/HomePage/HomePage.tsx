import { IPageProps } from 'interfaces/pagesInterfaces';

import CardsList from '../../components/CardsList';
import SearchBar from '../../components/SearchBar';
import React, { useEffect } from 'react';
import Preloader from '../../components/Preloader/Preloader';

import { useGetGamesQuery, useGetPublishersQuery } from '../../slices/apiSlice';

import { TRootState } from '../../store';
import { useSelector } from 'react-redux';
import { IGamesData } from 'interfaces/cardsIterfaces';

import styles from './HomePage.module.scss';

const HomePage = (props: IPageProps) => {
  const { pageTitle = 'untitled', setCurrentPageTitle } = props;

  const searchString = useSelector<TRootState, string>((state) => state.games.searchString);

  const {
    data: games,
    isError: isErrorGames,
    isFetching: isFetchingGames,
    isLoading: isLoadingGames,
  } = useGetGamesQuery(searchString);

  const {
    data: publishers,
    isError: isErrorPublishers,
    isFetching: isFetchingPublishers,
    isLoading: isLoadingPublishers,
  } = useGetPublishersQuery('');

  useEffect(() => {
    if (setCurrentPageTitle) setCurrentPageTitle(pageTitle);
  }, [setCurrentPageTitle, pageTitle]);

  const cards: IGamesData = { games: [], publishers: [] };

  if (games) cards.games = games;
  if (publishers) cards.publishers = publishers;

  return (
    <main className={styles.main}>
      <h2>
        This is a <span className="pageTitle">{pageTitle}</span> page
      </h2>
      <SearchBar />
      {isLoadingGames && isLoadingPublishers ? (
        <Preloader />
      ) : games?.length && publishers?.length ? (
        <CardsList {...cards} />
      ) : (
        <h2>Sorry, nothing was found.</h2>
      )}
    </main>
  );
};

export default HomePage;
