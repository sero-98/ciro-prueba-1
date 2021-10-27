import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Seed from './components/seed.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/seed" component={Seed} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
