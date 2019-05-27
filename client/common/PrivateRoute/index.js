import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import withCurrentUser from '@client/utils/hoc/withCurrentUser';
import { Sidebar } from '@client/modules/admin';

const propTypes = {
  render: PropTypes.func.isRequired,
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

  const { render } = props;

  return (
    <Route
      {...props}
      render={() => (
        <Fragment>
          <Sidebar />
          {render()}
        </Fragment>
      )}
    />
  );
};

PrivateRoute.propTypes = propTypes;
PrivateRoute.defaultProps = defaultProps;

export default withCurrentUser(PrivateRoute);
