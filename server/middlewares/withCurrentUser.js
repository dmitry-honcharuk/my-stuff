import { STATUS_CODES } from "http";

import withToken from './withToken';
import { getUserById } from '../services/User';

export default [
  withToken,
  async (req, res, next) => {
    const { token } = req;

    const id = +token;

    const user = await getUserById(id);

    if (!user) {
      return res.status(401).json({ error: STATUS_CODES[401] });
    }

    req.user = user;
    next();
  },
];
