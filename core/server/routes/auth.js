import { Router } from 'express';
import { SESSION } from '@core/constants';
import * as UserService from '@core/services/User';
import withCurrentUser from '@core/middlewares/withCurrentUser';
import { TOKEN_SECRET } from '@core/config';
import { sign } from 'jsonwebtoken';

const router = Router();

router.get('/logout', (req, res) => {
  res.clearCookie(SESSION.COOKIE_NAME, { signed: true, httpOnly: true });

  return res.json({});
});

router.get('/current', withCurrentUser, (req, res) => {
  const { user } = req;

  return res.json(user);
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(401)
      .json({ error: 'email and password are required fields' });
  }

  const isEmailTaken = await UserService.isEmailTaken(email);

  if (isEmailTaken) {
    return res.status(401).json({ email: 'This email is taken' });
  }

  const user = await UserService.createUser({
    email,
    password,
  });
  const token = sign({ userId: user.id }, TOKEN_SECRET, {
    expiresIn: 24 * 60 * 60,
  });
  res.cookie(SESSION.COOKIE_NAME, token, { signed: true, httpOnly: true });

  return res.json(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(401).json({ error: 'email is required field' });
  }

  if (!password) {
    return res.status(401).json({ error: 'password is required field' });
  }

  try {
    const user = await UserService.login({
      email,
      password,
    });

    const token = sign({ userId: user.id }, TOKEN_SECRET, {
      expiresIn: 24 * 60 * 60,
    });
    res.cookie(SESSION.COOKIE_NAME, token, { signed: true, httpOnly: true });

    return res.json(user);
  } catch (err) {
    return res.status(401).json({ error: 'invalid username or password' });
  }
});

export default router;
