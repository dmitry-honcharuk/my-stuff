import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form';

import OutlinedInput from './OutlinedInput';

import styles from './styles';

const useStyles = makeStyles(styles);

const propTypes = {
  name: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
  isEdit: PropTypes.bool.isRequired,
  value: PropTypes.node,
};
const defaultProps = {
  value: null,
};

const DataField = ({ name, label, isEdit, ...props }) => {
  const classes = useStyles();

  return (
    <Field
      component={OutlinedInput}
      id={name}
      name={name}
      margin="dense"
      label={label}
      labelWidth={0}
      classes={{ root: classes.field, disabled: classes.disabledField }}
      disabled={!isEdit}
      fullWidth
      {...props}
    />
  );
};

DataField.propTypes = propTypes;
DataField.defaultProps = defaultProps;

export default DataField;
