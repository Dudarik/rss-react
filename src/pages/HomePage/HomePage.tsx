import { IGamesData } from '../../interfaces/cardsIterfaces';
import { IPageProps } from 'interfaces/pagesInterfaces';

import CardsList from '../../components/CardsList';
import SearchBar from '../../components/SearchBar';
import React, { FormEvent, useEffect, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';

import { getGames, getPublishers } from '../../helpers/helpers';

import styles from './HomePage.module.scss';

const LS_KEY = 'dudarik_rss_react_searchString';

const HomePage = (props: IPageProps) => {
  const { pageTitle = 'untitled', setCurrentPageTitle } = props;
  const [cardsData, setCardsData] = useState<IGamesData>({
    publishers: [],
    games: [],
  });
  const [searchString, setSearchString] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const lsSearchString = localStorage.getItem(LS_KEY);

      let queryString = '';

      if (lsSearchString) {
        setSearchString(lsSearchString);
        queryString = `title_like=${lsSearchString}`;
      }

      const games = await getGames(queryString);
      const publishers = await getPublishers();
      const cards = { publishers, games };

      setCardsData(cards);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (setCurrentPageTitle) setCurrentPageTitle(pageTitle);
  }, [setCurrentPageTitle, pageTitle]);

  const handlerSubmitBtnClick = async (event: FormEvent) => {
    event.preventDefault();

    setIsLoading(true);

    localStorage.setItem(LS_KEY, searchString.trim());

    const queryString = `title_like=${searchString.trim()}`;

    const games = await getGames(queryString);

    setCardsData({ ...cardsData, games });
    setIsLoading(false);
  };

  return (
    <main className={styles.main}>
      <h2>
        This is a <span className="pageTitle">{pageTitle}</span> page
      </h2>
      <SearchBar {...{ searchString, setSearchString, handlerSubmitBtnClick }} />
      {isLoading ? (
        <Preloader />
      ) : cardsData.games.length ? (
        <CardsList {...cardsData} />
      ) : (
        <h2>Sorry, nothing was found.</h2>
      )}
    </main>
  );
};

export default HomePage;
