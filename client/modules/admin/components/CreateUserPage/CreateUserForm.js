import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import withStyles from '@material-ui/core/styles/withStyles';

import FormTextField from '@client/common/FormTextField';
import {
  requiredEmail,
  requiredPassword,
  requiredPasswordConfirm,
} from '@client/utils/validation/required';

import * as actions from '../../actions';

import s from './styles';

const CreateUserForm = ({ updatePreview, handleSubmit, classes }) => (
  <form className={classes.form} onSubmit={handleSubmit}>
    <div className={classes.field}>
      <Field
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        onBlur={updatePreview}
        component={FormTextField}
        validate={[requiredEmail]}
      />
    </div>
    <div className={classes.field}>
      <Field
        name="firstName"
        label="First Name"
        variant="outlined"
        fullWidth
        onBlur={updatePreview}
        component={FormTextField}
        validate={[requiredEmail]}
      />
    </div>
    <div className={classes.field}>
      <Field
        name="lastName"
        label="Last Name"
        variant="outlined"
        fullWidth
        onBlur={updatePreview}
        component={FormTextField}
        validate={[requiredEmail]}
      />
    </div>
    <div className={classes.field}>
      <Field
        name="password"
        label="Password"
        variant="outlined"
        fullWidth
        component={FormTextField}
        validate={[requiredPassword]}
      />
    </div>
    <div className={classes.field}>
      <Field
        name="passwordConfirm"
        label="Confirm Password"
        variant="outlined"
        fullWidth
        component={FormTextField}
        validate={[requiredPasswordConfirm]}
      />
    </div>
  </form>
);

export default compose(
  withStyles(s),
  connect(
    null,
    {
      newUserPreviewUpdate: actions.newUserPreviewUpdate,
    },
  ),
  reduxForm({
    form: 'createUserForm',
  }),
  withHandlers({
    updatePreview: ({ newUserPreviewUpdate }) => ({
      target: { name, value },
    }) => newUserPreviewUpdate(name, value),
  }),
)(CreateUserForm);
