import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import withCurrentUser from '../../utils/hoc/withCurrentUser';

const propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  redirectTo: PropTypes.string,
};
const defaultProps = {
  redirectTo: '/login',
};

const PrivateRoute = ({ user, redirectTo, ...props }) => {
  if (!user.id) {
    return <Redirect to={redirectTo} />;
  }

  return <Route {...props} />;
};

PrivateRoute.propTypes = propTypes;
PrivateRoute.defaultProps = defaultProps;

export default withCurrentUser(PrivateRoute);
