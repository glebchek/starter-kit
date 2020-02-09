import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Greeting from '../greeting';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/user/:name']}>
          <Greeting />
        </Route>
      </Switch>
    </Router>
  );
}
