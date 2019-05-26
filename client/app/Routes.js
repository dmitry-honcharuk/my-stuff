import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from '@client/common/PrivateRoute';
import PublicOnlyRoute from '@client/common/PublicOnlyRoute';

import { LoginPage, RegistrationPage } from '@client/modules/auth';
import { AdminRoot, Products, Users } from '@client/modules/admin';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/" exact render={() => <AdminRoot />} />
      <PrivateRoute path="/products" exact render={() => <Products />} />
      <PrivateRoute path="/users" exact render={() => <Users />} />
      <PublicOnlyRoute
        path="/registration"
        exact
        render={() => <RegistrationPage />}
      />
      <PublicOnlyRoute path="/login" exact render={() => <LoginPage />} />
    </Switch>
  </Router>
);

export default Routes;
