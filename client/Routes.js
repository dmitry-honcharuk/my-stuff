import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import PrivateRoute from './common/PrivateRoute';
import PublicOnlyRoute from './common/PublicOnlyRoute';

import { RegistrationPage } from './modules/auth';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute path='/' exact component={() => <h1>App</h1>} />
      <PublicOnlyRoute path='/registration' exact component={RegistrationPage} />
    </Switch>
  </Router>
);

export default Routes;
