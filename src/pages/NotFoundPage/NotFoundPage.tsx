import React from 'react';

import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';
import { IPageProps } from 'interfaces/pagesInterfaces';

const NotFoundPage = (props: IPageProps) => {
  const { pageTitle = 'untitled', setCurrentPageTitle } = props;

  if (setCurrentPageTitle) setCurrentPageTitle(pageTitle);

  return (
    <main className={styles.main}>
      <h2>
        This is a <span className="pageTitle">{pageTitle}</span> page.
      </h2>
      <Link to="/">Go to Homepage</Link>
    </main>
  );
};

export default NotFoundPage;
