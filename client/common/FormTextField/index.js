import React from 'react';
import { TextField } from '@material-ui/core';

const FormTextField = ({
  input,
  meta: { error, touched },
  ...props,
}) => (
  <TextField
    {...input}
    {...props}
    helperText={touched && error}
    error={touched && !!error}
  />
);

export default FormTextField;
