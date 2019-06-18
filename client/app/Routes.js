import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import PrivateRoute from '@client/common/PrivateRoute';
import PublicOnlyRoute from '@client/common/PublicOnlyRoute';

import { LoginPage, RegistrationPage } from '@client/modules/auth';
import {
  AdminRoot,
  ProductDetails,
  Products,
  Users,
} from '@client/modules/admin';

import history from './history';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <PrivateRoute path="/" exact render={() => <AdminRoot />} />
      <PrivateRoute path="/products" exact render={() => <Products />} />
      <PrivateRoute
        path="/products/:productId"
        exact
        render={() => <ProductDetails />}
      />
      <PrivateRoute path="/users" exact render={() => <Users />} />
      <PublicOnlyRoute
        path="/registration"
        exact
        render={() => <RegistrationPage />}
      />
      <PublicOnlyRoute path="/login" exact render={() => <LoginPage />} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
