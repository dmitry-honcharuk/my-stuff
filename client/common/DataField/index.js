import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.node,
};
const defaultProps = {
  value: null,
};

const DataField = ({ label, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <span className={classes.label}>{label}</span>
      </div>
      <div className={classes.value}>{value}</div>
    </div>
  );
};

DataField.propTypes = propTypes;
DataField.defaultProps = defaultProps;

export default DataField;
