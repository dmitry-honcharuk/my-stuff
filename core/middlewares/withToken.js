import { STATUS_CODES } from 'http';

import { SESSION_COOKIE_NAME } from '@core/constants';

export default (req, res, next) => {
  const { [SESSION_COOKIE_NAME]: token } = req.signedCookies;

  if (!token) {
    return res.status(401).json({ error: STATUS_CODES[401] });
  }

  req.token = token;
  next();
};
