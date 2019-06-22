import React from 'react';

import Page, { PageActions } from '../../components/Page';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Root = () => (
  <Page title="Users">
    <PageActions>
      <Button component={Link} to="/create-user" color="secondary">
        Create
      </Button>
    </PageActions>
    <h1>Users</h1>
  </Page>
);

export default Root;
