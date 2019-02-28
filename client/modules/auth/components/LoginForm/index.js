import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import required from '../../../../utils/validation/required';

import FormTextField from '../../../../common/FormTextField';
import ProcessButton from '../../../../common/ProcessButton';

import { LOGIN_FORM_NAME } from '../../constants';

import * as actions from '../../actions';

import s from './styles';

const requiredEmail = required('Email');
const requiredPassword = required('Password');

const propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};
const defaultProps = {
  submitting: false,
};

const LoginForm = ({ classes, submitting, handleSubmit, loginUser }) => (
  <div className={classes.container}>
    <form onSubmit={handleSubmit(loginUser)} className={classes.form}>
      <Typography component="h4" variant="h4" align="center">
        Registration
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
          Login
        </ProcessButton>
      </div>
    </form>
  </div>
);

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;

export default compose(
  connect(
    null,
    {
      loginUser: actions.loginUser,
    },
  ),
  reduxForm({
    form: LOGIN_FORM_NAME,
  }),
  withStyles(s),
)(LoginForm);
