import { STATUS_CODES } from 'http';
import { verifyToken } from '@core/services/User';

import { SESSION } from '@core/constants';

export default async (req, res, next) => {
  const { [SESSION.COOKIE_NAME]: token } = req.signedCookies;

  if (!token) {
    return res.status(401).json({ error: STATUS_CODES[401] });
  }

  const verifiedToken = await verifyToken(token);
  req.token = verifiedToken;
  next();
};
