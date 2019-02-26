import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import s from './styles';

const AdminHeader = ({ classes }) => (
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <Link
        component={RouterLink}
        underline="none"
        variant="h6"
        color="inherit"
        to="/"
      >
        MY STUFF <em className={classes.adminLabel}>[Admin]</em>
      </Link>
    </Toolbar>
  </AppBar>
);

export default withStyles(s)(AdminHeader);
