import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import s from './styles';

const propTypes = {
  left: PropTypes.any.isRequired,
  right: PropTypes.any.isRequired,
};

const Page = ({ left, right, classes }) => (
  <div className={classes.wrapper}>
    <Paper className={classes.content} elevation={10}>
      <div className={classes.left}>{left}</div>
      <div className={classes.right}>{right}</div>
    </Paper>
  </div>
);

Page.propTypes = propTypes;

export default withStyles(s)(Page);
