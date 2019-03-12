import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';

import Routes from './Routes';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: teal,
    secondary: pink,
  },
});

const styles = () => ({
  root: {
    fontFamily: 'Roboto',
  },
});

const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <Routes />
    </div>
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
