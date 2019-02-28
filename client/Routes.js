import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from './common/PrivateRoute';
import PublicOnlyRoute from './common/PublicOnlyRoute';

import { LoginPage, RegistrationPage } from './modules/auth';
import { AdminRoot, CreateProduct } from './modules/admin';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/" exact component={AdminRoot} />
      <PrivateRoute path="/create-product" exact component={CreateProduct} />
      <PublicOnlyRoute
        path="/registration"
        exact
        component={RegistrationPage}
      />
      <PublicOnlyRoute path="/login" exact component={LoginPage} />
    </Switch>
  </Router>
);

export default Routes;
