import { STATUS_CODES } from 'http';

import { SESSION } from '@core/constants';
import { getUserById, verifyToken } from '@core/services/User';

import withToken from './withToken';

export default [
  withToken,
  async (req, res, next) => {
    const { token } = req;
    const verifiedToken = await verifyToken(token);
    if (!verifiedToken) {
      res.clearCookie(SESSION.COOKIE_NAME, { signed: true, httpOnly: true });
      return res.status(401).json({ error: STATUS_CODES[401] });
    }
    req.user = verifiedToken;
    next();
  },
];
