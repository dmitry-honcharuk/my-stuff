import { Router } from 'express';

import { PERMISSIONS } from '@common/constants';
import withPermissions from '@core/middlewares/withPermissions';
import {
  respondIfError,
  withNotTakenEmail,
  withRequiredEmailField,
  withRequiredPasswordField,
  withValidRolesField,
} from '@core/middlewares/validation';
import { createUser, getUsers, serializeUser } from '@core/services/User';

const router = Router();

router.post(
  '/',
  withPermissions([PERMISSIONS.USERS_CREATE]),
  withValidRolesField,
  withRequiredPasswordField,
  withRequiredEmailField,
  withNotTakenEmail,
  respondIfError,
  async (req, res) => {
    const { email, password, roles } = req.body;

    const user = await createUser({
      email,
      password,
      roles,
    });

    const serializedUser = await serializeUser(user.id);

    return res.json(serializedUser);
  },
);

router.get(
  '/',
  withPermissions([PERMISSIONS.USERS_GET_ALL]),
  async (req, res) => {
    const users = await getUsers();
    return res.json(users);
  },
);

export default router;
