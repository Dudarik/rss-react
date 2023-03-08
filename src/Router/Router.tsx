import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import NotFoundPage from '@/pages/NotFoundPage';

class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default Router;
