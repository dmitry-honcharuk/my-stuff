import { STATUS_CODES } from 'http';

import { SESSION_COOKIE_NAME } from '@core/constants';
import { getUserById } from '@core/services/User';

import withToken from './withToken';

export default [
  withToken,
  async (req, res, next) => {
    const { token } = req;

    const id = +token;

    const user = await getUserById(id);

    if (!user) {
      res.clearCookie(SESSION_COOKIE_NAME, { signed: true, httpOnly: true });
      return res.status(401).json({ error: STATUS_CODES[401] });
    }

    req.user = user;
    next();
  },
];
