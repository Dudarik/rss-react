import React, { Component } from 'react';
import Root from './components/Root';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Root />
        <Footer />
      </>
    );
  }
}
export default App;
