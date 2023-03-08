import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

import MainNav from './components/MainNav';

import AppStyles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <MainNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </header>
        <div className={AppStyles.App}></div>
        <footer></footer>
      </>
    );
  }
}
export default App;
