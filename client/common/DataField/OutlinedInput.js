import React from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes } from 'redux-form';
import MaterialOutlinedInput from '@material-ui/core/OutlinedInput';

const propTypes = {
  input: PropTypes.shape(fieldInputPropTypes),
};

const OutlinedInput = ({ input, ...props }) => (
  <MaterialOutlinedInput {...input} {...props} />
);

OutlinedInput.propTypes = propTypes;

export default OutlinedInput;
