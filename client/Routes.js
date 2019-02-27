import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";

import PrivateRoute from './common/PrivateRoute';
import PublicOnlyRoute from './common/PublicOnlyRoute';

import {RegistrationPage} from './modules/auth';
import {LoginPage} from './modules/auth';
import {AdminRoot} from './modules/admin';

const Routes = () => (
    <Router>
      <Switch>
        <PrivateRoute path='/' exact component={AdminRoot}/>
        <PublicOnlyRoute path='/registration' exact component={RegistrationPage}/>
        <PublicOnlyRoute path='/login' exact component={LoginPage}/>
      </Switch>
    </Router>
);

export default Routes;
