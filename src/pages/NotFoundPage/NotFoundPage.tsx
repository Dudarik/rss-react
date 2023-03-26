import Page from '../Page';
import React from 'react';

import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';

class NotFoundPage extends Page {
  render() {
    return (
      <main className={styles.main}>
        <h2>
          This is a <span className="pageTitle">{this.pageTitle}</span> page.
        </h2>
        <Link to="/">Go to Homepage</Link>
      </main>
    );
  }
}

export default NotFoundPage;
