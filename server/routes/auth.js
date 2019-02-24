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
  const hashedPassword = await UserService.hashedPassword(password, 10);
  console.log('hashedPassword', hashedPassword);
  console.log('type is ', typeof hashedPassword);

  if (!email || !password) {
    return res.status(401).json({ error: 'email and password are required fields' });
  }

  if (isEmailTaken) {
    return res.status(401).json({ error: 'this email is taken' });
  }

  if (hashedPassword) {
    console.log('daaa');
    const user = await UserService.createUser({
      email,
      hashedPassword,
    });

    res.cookie(SESSION_COOKIE_NAME, user.id, { signed: true, httpOnly: true });

    return res.json(user);
  }
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
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    bcrypt.hash(password, salt, null).then(function(hash) {
      // Store hash in your password DB.
      console.log('hash', hash);
    });
    console.log('test', hash);

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
