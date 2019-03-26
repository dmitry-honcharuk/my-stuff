import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from '@client/common/PrivateRoute';
import PublicOnlyRoute from '@client/common/PublicOnlyRoute';

import { LoginPage, RegistrationPage } from '@client/modules/auth';
import { AdminRoot, CreateProduct, Users } from '@client/modules/admin';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/" exact component={AdminRoot} />
      <PrivateRoute path="/create-product" exact component={CreateProduct} />
      <PrivateRoute path="/users" exact component={Users} />
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
