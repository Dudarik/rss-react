import CardsList from '@/components/CardsList';
import SearchBar from '@/components/SearchBar';
import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <main className="main">
        <h1>This is a HOME page</h1>
        <SearchBar />
        <CardsList />
      </main>
    );
  }
}

export default HomePage;
