import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router';

class App extends Component {
  state = {
    currentPageTitle: '',
  };

  setCurrentPageTitle = (newTitle: string) => {
    this.setState({ currentPageTitle: newTitle });
  };

  render() {
    return (
      <>
        <Header pageTitle={this.state.currentPageTitle} />
        <Router setCurrentPageTitle={this.setCurrentPageTitle} />
        <Footer />
      </>
    );
  }
}
export default App;
