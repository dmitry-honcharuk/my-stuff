import React from 'react';

import Page, { PageActions } from '../../components/Page';

import actions from './actions';

const Users = () => (
  <Page title="Users">
    <PageActions actions={actions} />
    <h1>Users</h1>
  </Page>
);

export default Users;
