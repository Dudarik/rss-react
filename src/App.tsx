import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router';

const App = () => {
  const [currentPageTitle, setCurrentPageTitle] = useState('');

  return (
    <>
      <Header pageTitle={currentPageTitle} />
      <Router setCurrentPageTitle={setCurrentPageTitle} />
      <Footer />
    </>
  );
};

export default App;
