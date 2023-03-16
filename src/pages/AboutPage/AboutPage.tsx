import Page from '../Page';
import React from 'react';

import styles from './AboutPage.module.scss';

class AboutPage extends Page {
  render() {
    return (
      <main className={styles.main}>
        <h2>
          This is an <span className="pageTitle">{this.pageTitle}</span> page
        </h2>
      </main>
    );
  }
}

export default AboutPage;
