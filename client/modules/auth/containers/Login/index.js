import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import LoginForm from '../../components/LoginForm';

import s from './styles';

const Login = ({ classes }) => (
  <div className={classes.root}>
    <LoginForm />
  </div>
);

export default withStyles(s)(Login);
