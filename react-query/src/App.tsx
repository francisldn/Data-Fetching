import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/ErrorFallBack';

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
