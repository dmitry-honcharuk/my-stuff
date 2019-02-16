import { Router } from 'express';
import * as UserService from '../services/User';

import { SESSION_COOKIE_NAME } from '../constants';

const router = Router();

router.post('/', async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  if (!email || !password) {
    return res.status(401).json({ error: 'email and password are required fields' });
  }

  const isEmailTaken = await UserService.isEmailTaken(email);

  if (isEmailTaken) {
    return res.status(401).json({ error: 'this email is taken' });
  }

  const user = await UserService.createUser({
    email,
    password,
  });

  res.cookie(SESSION_COOKIE_NAME, user.id, { signed: true });

  return res.json(user);
});

router.get('/', (req, res) => {
  return res.json(req.signedCookies);
});

export default router;
