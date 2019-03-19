import { STATUS_CODES } from 'http';

import { isSubsetOf } from '@core/utils/collection';

import withCurrentUser from './withCurrentUser';

export default (requiredPermissions = []) => [
  withCurrentUser,
  (req, res, next) => {
    const {
      user: { permissions = [] },
    } = req;
    const isSubsetOfPermissions = isSubsetOf(permissions);

    if (!isSubsetOfPermissions(requiredPermissions)) {
      return res.status(401).json({ error: STATUS_CODES[401] });
    }

    return next();
  },
];
