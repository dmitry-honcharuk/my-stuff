import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import withStyles from '@material-ui/core/styles/withStyles';

import hideIf from '@client/utils/hoc/hideIf';

import s from './styles';

const propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    }).isRequired,
  ).isRequired,
};
const defaultProps = {
  actions: [],
};

const Actions = ({ actions, classes }) => (
  <div className={classes.actions}>
    {actions.map(({ key, component }) => (
      <Fragment key={key}>{component}</Fragment>
    ))}
  </div>
);

Actions.propTypes = propTypes;
Actions.defaultProps = defaultProps;

export default compose(
  hideIf(({ actions }) => !actions || actions.length === 0),
  withStyles(s),
)(Actions);
