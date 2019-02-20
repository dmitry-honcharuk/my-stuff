import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Routes from './Routes';

const styles = () => ({
  root: {
    fontFamily: 'Roboto',
  },
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <CssBaseline />
    <Routes />
  </div>
);

export default withStyles(styles)(App);
