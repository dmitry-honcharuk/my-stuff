import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import RegistrationForm from '../../components/RegistrationForm';

import s from './styles';

const Register = ({ classes }) => (
  <div className={classes.root}>
    <RegistrationForm />
  </div>
);

export default withStyles(s)(Register);
