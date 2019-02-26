import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import AdminHeader from '../AdminHeader';

import s from './styles';

const AdminPage = ({ classes, children }) => (
  <Fragment>
    <AdminHeader />
    <main className={classes.content}>{children}</main>
  </Fragment>
);

export default withStyles(s)(AdminPage);
