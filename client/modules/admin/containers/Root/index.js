import React, { Fragment } from 'react';

import AdminPage from '../../components/AdminPage';
import { LogoutButton } from '../../../auth';

const Root = () => (
  <AdminPage>
    <LogoutButton />
    <h1>Admin Panel Root</h1>
  </AdminPage>
);

export default Root;
