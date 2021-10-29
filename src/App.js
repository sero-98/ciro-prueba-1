import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Seed from './pages/seed.jsx';
import Home from './pages/Home.js';
import Login from './pages/login/login.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/seed" component={Seed} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
