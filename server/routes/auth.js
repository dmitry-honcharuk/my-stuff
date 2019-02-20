import { Router } from 'express';

import * as UserService from '../services/User';
import withCurrentUser from '../middlewares/withCurrentUser';

import { SESSION_COOKIE_NAME } from '../constants';

const router = Router();

router.get('/current', withCurrentUser, async (req, res) => {
  const { user } = req;

  return res.json(user);
});

router.post('/register', async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required fields' });
  }

  const isEmailTaken = await UserService.isEmailTaken(email);

  if (isEmailTaken) {
    return res.status(400).json({ email: 'This email is taken' });
  }

  const user = await UserService.createUser({
    email,
    password,
  });

  res.cookie(SESSION_COOKIE_NAME, user.id, { signed: true, httpOnly: true });

  return res.json(user);
});

router.post('/login', async (req, res) => {
  const {
    email,
    password,
  } = req.body;
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

    return res.json(user);

  } catch (err) {
    return res.status(400).json({ error: 'invalid username or password' });
  }
});

export default router;
