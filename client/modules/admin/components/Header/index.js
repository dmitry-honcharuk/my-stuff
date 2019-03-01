import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import s from './styles';

const propTypes = {
  // It's ok to have nothing as a title
  title: PropTypes.string,
};

const Header = ({ title, classes }) => (
  <AppBar className={classes.root} position="fixed" color="primary">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        <em>{title}</em>
      </Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = propTypes;

export default withStyles(s)(Header);
