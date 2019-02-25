import { Router } from 'express';
import * as UserService from '../services/User';

import { SESSION_COOKIE_NAME } from '../constants';

const router = Router();

router.post('/register', async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  const isEmailTaken = await UserService.isEmailTaken(email);

  if (!email || !password) {
    return res.status(401).json({ error: 'email and password are required fields' });
  }

  if (isEmailTaken) {
    return res.status(401).json({ error: 'this email is taken' });
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

  const user = await UserService.login({
    email,
    password,
  });

  res.cookie(SESSION_COOKIE_NAME, user.id, { signed: true, httpOnly: true });

  return res.json(user);
});

export default router;
