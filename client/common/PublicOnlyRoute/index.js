import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from "react-router-dom";

import withCurrentUser from '../../utils/hoc/withCurrentUser';

const propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  redirectTo: PropTypes.string,
};
const defaultProps = {
  redirectTo: '/',
};

const PublicOnlyRoute = ({ user, redirectTo, ...props }) => {
  if (user.id) {
    return <Redirect to={redirectTo} />;
  }

  return <Route {...props} />;
};

PublicOnlyRoute.propTypes = propTypes;
PublicOnlyRoute.defaultProps = defaultProps;

export default withCurrentUser(PublicOnlyRoute);
