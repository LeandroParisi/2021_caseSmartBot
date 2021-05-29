import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { GeneralAnalysis } from './pages';
import './App.css';
import './assets/scss/reset.scss';
import './assets/scss/fonts.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={GeneralAnalysis} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
