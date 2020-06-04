import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Session from '../pages/Session';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/session" exact component={Session} />
        <Redirect from="*" to="/session" />
      </Switch>
    </Router>
  );
}
