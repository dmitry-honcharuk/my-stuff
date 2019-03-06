import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import required from '@client/utils/validation/required';

import FormTextField from '@client/common/FormTextField';
import ProcessButton from '@client/common/ProcessButton';

import { REGISTRATION_FORM_NAME } from '../../constants';

import * as actions from '../../actions';

import s from './styles';

const requiredEmail = required('Email');
const requiredPassword = required('Password');

const propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};
const defaultProps = {
  submitting: false,
};

const RegistrationForm = ({
  classes,
  submitting,
  handleSubmit,
  registerUser,
}) => (
  <div className={classes.container}>
    <form onSubmit={handleSubmit(registerUser)} className={classes.form}>
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
          Register
        </ProcessButton>
      </div>
    </form>
  </div>
);

RegistrationForm.propTypes = propTypes;
RegistrationForm.defaultProps = defaultProps;

export default compose(
  connect(
    null,
    {
      registerUser: actions.registerUser,
    },
  ),
  reduxForm({
    form: REGISTRATION_FORM_NAME,
  }),
  withStyles(s),
)(RegistrationForm);
