import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import s from './styles';

const propTypes = {
  children: PropTypes.node.isRequired,
  clearAfter: PropTypes.bool,
};
const defaultProps = {
  clearAfter: false,
};

const Actions = ({ clearAfter, children, classes }) => {
  return (
    <Fragment>
      <div className={classes.actions}>{children}</div>
      {clearAfter && <div className={classes.clearfix} />}
    </Fragment>
  );
};

Actions.propTypes = propTypes;
Actions.defaultProps = defaultProps;

export default withStyles(s)(Actions);
