import Page from '../Page';
import React from 'react';

import styles from './NotFoundPage.module.scss';

class NotFoundPage extends Page {
  render() {
    return (
      <main className={styles.main}>
        <h1>This is a NOT FOUND(404) page</h1>
      </main>
    );
  }
}

export default NotFoundPage;
