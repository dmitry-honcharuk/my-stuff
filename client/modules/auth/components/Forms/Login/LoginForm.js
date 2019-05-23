import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { Typography } from '@material-ui/core';

import required from '@client/utils/validation/required';

import FormTextField from '@client/common/FormTextField';
import ProcessButton from '@client/common/ProcessButton';

const requiredEmail = required('Email');
const requiredPassword = required('Password');

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  anyTouched: PropTypes.bool,
  error: PropTypes.string,
};
const defaultProps = {
  submitting: false,
  anyTouched: false,
  error: null,
};

const LoginForm = ({ classes, submitting, anyTouched, error, onSubmit }) => (
  <div className={classes.container}>
    <form onSubmit={onSubmit} className={classes.form}>
      <Typography component="h4" variant="h4" align="center">
        Sign In
      </Typography>
      <Field
        label="Email"
        type="email"
        name="email"
        margin="dense"
        validate={[requiredEmail]}
        component={FormTextField}
      />
      <Field
        label="Password"
        type="password"
        name="password"
        margin="dense"
        validate={[requiredPassword]}
        component={FormTextField}
      />
      <div className={classes.actions}>
        <ProcessButton
          inProcess={submitting}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign in
        </ProcessButton>
      </div>
      {anyTouched && error && (
        <div className={classes.errorWrapper}>
          <span className={classes.error}>{error}</span>
        </div>
      )}
    </form>
    <div className={classes.linkWrapper}>
      Don’t have an account?
      <Link to="/registration" className={classes.link}>
        Sign Up
      </Link>
    </div>
  </div>
);

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default LoginForm;
