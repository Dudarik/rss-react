import Page from '../Page';
import React, { ReactNode } from 'react';

import styles from './FormPage.module.scss';
import FormAddCard from '../../components/FormAddCard';

class FormPage extends Page {
  render(): ReactNode {
    return (
      <main className={styles.main}>
        <h2>Добавьте новую карточку</h2>
        <FormAddCard />
      </main>
    );
  }
}

export default FormPage;
