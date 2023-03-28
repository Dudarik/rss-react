import { IGamesData } from '../../interfaces/cardsIterfaces';

import CardsList from '../../components/CardsList';
import SearchBar from '../../components/SearchBar';
import React from 'react';

import { getGamesData } from '../../helpers';

import styles from './HomePage.module.scss';

import { IPageProps } from 'interfaces/pagesInterfaces';

const HomePage = (props: IPageProps) => {
  const { pageTitle, setCurrentPageTitle } = props;
  const cardsData = getGamesData() as IGamesData;

  if (setCurrentPageTitle) setCurrentPageTitle(String(pageTitle));

  return (
    <main className={styles.main}>
      <h2>
        This is a <span className="pageTitle">{pageTitle}</span> page
      </h2>
      <SearchBar />
      <CardsList {...cardsData} />
    </main>
  );
};

export default HomePage;

// class HomePage extends Page {
//   render() {
//     const cardsData = getGamesData() as IGamesData;
//     return (
//       <main className={styles.main}>
//         <h2>
//           This is a <span className="pageTitle">{this.pageTitle}</span> page
//         </h2>
//         <SearchBar />
//         <CardsList {...cardsData} />
//       </main>
//     );
//   }
// }

// export default HomePage;
