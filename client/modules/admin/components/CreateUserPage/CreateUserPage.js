import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import CreateUserForm from './CreateUserForm';
import NewUserPreview from './NewUserPreview';

import s from './styles';

const CreateUserPage = ({ classes }) => (
  <Fragment>
    <Typography variant="h3" gutterBottom>
      User Info
    </Typography>
    <div className={classes.wrapper}>
      <div className={classes.source}>
        <CreateUserForm />
      </div>
      <div className={classes.output}>
        <NewUserPreview />
      </div>
    </div>
  </Fragment>
);

export default withStyles(s)(CreateUserPage);
