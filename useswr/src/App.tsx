import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import ErrorFallBack from './components/ErrorFallBack';
import {ErrorBoundary} from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <CardList/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
