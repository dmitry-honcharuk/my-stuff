import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

import { LOGIN_FORM_NAME } from '../../../constants';

import { operations } from '../../../state';

import LoginFormView from './LoginForm';

import s from '../styles';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const LoginForm = props => {
  const { handleSubmit, loginUser } = props;
  const onSubmit = useCallback(handleSubmit(loginUser), [
    handleSubmit,
    loginUser,
  ]);

  return <LoginFormView onSubmit={onSubmit} {...props} />;
};

LoginForm.propTypes = propTypes;

export default compose(
  connect(
    null,
    {
      loginUser: operations.loginUser,
    },
  ),
  reduxForm({
    form: LOGIN_FORM_NAME,
  }),
  withStyles(s),
)(LoginForm);
