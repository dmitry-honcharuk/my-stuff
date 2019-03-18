import { STATUS_CODES } from 'http';

import { SESSION } from '@core/constants';
import { verifyToken } from '@core/services/Auth';

import withToken from './withToken';

export default [
  withToken,
  async (req, res, next) => {
    const { token } = req;

    try {
      const { user } = await verifyToken(token);

      req.user = user;

      return next();
    } catch (err) {
      res.clearCookie(SESSION.COOKIE_NAME, { signed: true, httpOnly: true });
      return res.status(401).json({ error: STATUS_CODES[401] });
    }
  },
];
