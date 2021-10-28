import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Seed from './pages/seed.jsx';
import Home from './pages/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/seed" component={Seed} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
