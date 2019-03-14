import { Router } from 'express';
import { SESSION } from '@core/constants';
import * as UserService from '@core/services/User';
import { createToken } from '@core/services/Auth';
import withCurrentUser from '@core/middlewares/withCurrentUser';
import {
  withRequiredEmailField,
  withRequiredPasswordField,
  respondIfError,
} from '@core/middlewares/validation';

const router = Router();

router.get('/logout', (req, res) => {
  res.clearCookie(SESSION.COOKIE_NAME, { signed: true, httpOnly: true });

  return res.json({});
});

router.get('/current', withCurrentUser, (req, res) => {
  const { user } = req;

  return res.json(user);
});

router.post(
  '/register',
  withRequiredEmailField,
  withRequiredPasswordField,
  respondIfError,
  async (req, res) => {
    const { email, password } = req.body;

    const isEmailTaken = await UserService.isEmailTaken(email);

    if (isEmailTaken) {
      return res.status(401).json({ email: 'This email is taken' });
    }

    const user = await UserService.createUser({
      email,
      password,
    });
    const token = createToken({ id: user.id, email });

    res.cookie(SESSION.COOKIE_NAME, token, { signed: true, httpOnly: true });

    return res.json(user);
  },
);

router.post(
  '/login',
  withRequiredEmailField,
  withRequiredPasswordField,
  respondIfError,
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await UserService.login({
        email,
        password,
      });

      const token = createToken({ id: user.id, email });

      res.cookie(SESSION.COOKIE_NAME, token, { signed: true, httpOnly: true });

      return res.json(user);
    } catch (err) {
      return res.status(401).json({ error: 'invalid username or password' });
    }
  },
);

export default router;
