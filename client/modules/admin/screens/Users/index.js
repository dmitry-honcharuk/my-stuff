import React from 'react';

import Page, { PageActions } from '../../components/Page';

import actions from './actions';

const Root = () => (
  <Page title="Users">
    <PageActions actions={actions} />
    <h1>Users</h1>
  </Page>
);

export default Root;
