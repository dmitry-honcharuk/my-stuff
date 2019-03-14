import { verify, sign } from 'jsonwebtoken';
import { TOKEN_SECRET } from '@core/config';

export const verifyToken = token => {
  return new Promise((resolve, reject) => {
    verify(token, TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        return reject(err);
      }
      return resolve(decodedToken);
    });
  });
};

export const createToken = data => {
  return sign(data, TOKEN_SECRET, {
    expiresIn: 24 * 60 * 60,
  });
};
