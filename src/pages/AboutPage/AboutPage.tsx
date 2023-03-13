import Page from '../Page';
import React from 'react';

import styles from './AboutPage.module.scss';

class AboutPage extends Page {
  render() {
    return (
      <main className={styles.main}>
        <h1>This is an ABOUT page</h1>
      </main>
    );
  }
}

export default AboutPage;
