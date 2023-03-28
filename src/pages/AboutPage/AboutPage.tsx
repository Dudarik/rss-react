import React from 'react';

import styles from './AboutPage.module.scss';

import { IPageProps } from 'interfaces/pagesInterfaces';

const AboutPage = (props: IPageProps) => {
  const { pageTitle = 'untitled', setCurrentPageTitle } = props;

  if (setCurrentPageTitle) setCurrentPageTitle(String(pageTitle));
  return (
    <main className={styles.main}>
      <h2>
        This is an <span className="pageTitle">{pageTitle}</span> page
      </h2>
    </main>
  );
};

export default AboutPage;
