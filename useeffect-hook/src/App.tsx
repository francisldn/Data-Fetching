import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <CardList/>
    </div>
  );
}

export default App;
