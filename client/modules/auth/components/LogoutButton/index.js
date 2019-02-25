import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import * as actions from '../../actions';

const propTypes = {
  logout: PropTypes.func.isRequired,
};

const LogoutButton = ({ logout, ...props }) =>
  <Button
    variant="outlined"
    color="secondary"
    onClick={logout}
    {...props}
  >
    Logout
  </Button>;

LogoutButton.propTypes = propTypes;

export default connect(
  null,
  {
    logout: actions.logout,
  },
)(LogoutButton);
