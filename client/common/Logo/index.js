import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const Logo = () => (
  <Link
    component={RouterLink}
    underline="none"
    variant="h6"
    color="inherit"
    to="/"
  >
    MY STUFF
  </Link>
);

export default Logo;
