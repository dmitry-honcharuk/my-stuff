import { STATUS_CODES } from "http";

import withToken from './withToken';
import { getUserById } from '../services/User';

import { SESSION_COOKIE_NAME } from '../constants';

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
