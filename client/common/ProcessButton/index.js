import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Button, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import s from './styles';

const propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  inProcess: PropTypes.bool,
};
const defaultProps = {
  inProcess: false,
};

const ProcessButton = ({ classes, inProcess, children, ...props }) => (
  <Button
    variant="contained"
    color="primary"
    type="submit"
    disabled={inProcess}
    className={cn(classes.button)}
    {...props}
  >
    {children}
    {inProcess && <CircularProgress size={24} color="secondary" className={classes.icon} />}
  </Button>
);

ProcessButton.propTypes = propTypes;
ProcessButton.defaultProps = defaultProps;

export default withStyles(s)(ProcessButton);
