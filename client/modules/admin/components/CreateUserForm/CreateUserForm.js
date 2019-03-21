import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'recompose';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import FormTextField from '@client/common/FormTextField';
import {
  requiredEmail,
  requiredPassword,
  requiredPasswordConfirm,
} from '@client/utils/validation/required';

import s from './styles';

const CreateUserForm = ({ handleSubmit, classes }) => (
  <div>
    <Typography variant="h3" gutterBottom>
      User Info
    </Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.field}>
        <Field
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
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
  </div>
);

export default compose(
  withStyles(s),
  reduxForm({
    form: 'createUserForm',
  }),
)(CreateUserForm);
