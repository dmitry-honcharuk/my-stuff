import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../../../../common/Logo';

import s from './styles';

const Sidebar = ({ classes }) => (
  <div className={classes.container}>
    <AppBar position="static" className={classes.bar} color="secondary">
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(s)(Sidebar);
