import React from 'react';
import BgsOverview from './BgsOverview';
import { Route } from 'react-router-dom'

import '../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <img className="App main-header-logo" src="sepp-banner.png" alt="SEPP" />
      </header>

      <Route exact path="/" component={BgsOverview}>
      </Route>
    </div>
  );
};

export default App;
