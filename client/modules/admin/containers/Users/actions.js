import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';

export default [
  {
    key: 'createUser',
    component: (
      <Button component={Link} to="/create-user" color="secondary">
        Create
      </Button>
    ),
  },
];
