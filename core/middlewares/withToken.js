import { STATUS_CODES } from 'http';

import { SESSION } from '@core/constants';

export default (req, res, next) => {
  const { [SESSION.COOKIE_NAME]: token } = req.signedCookies;

  if (!token) {
    return res.status(401).json({ error: STATUS_CODES[401] });
  }

  req.token = token;
  next();
};
