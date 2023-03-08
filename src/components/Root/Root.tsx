import Router from '@/Router';
import React, { Component, ReactNode } from 'react';

import AppStyles from '@/App.module.scss';

class Root extends Component {
  render(): ReactNode {
    return (
      <>
        <div className={AppStyles.App}>
          <Router />
        </div>
        <footer></footer>
      </>
    );
  }
}

export default Root;
