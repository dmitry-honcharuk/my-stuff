import React from 'react';

import Page from '../../components/Page';
import { LogoutButton } from '../../../auth';

const Root = () => (
  <Page title="Products">
    <LogoutButton />
    <h1>Admin Panel Root</h1>
  </Page>
);

export default Root;
