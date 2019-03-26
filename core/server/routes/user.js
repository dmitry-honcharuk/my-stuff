import { Router } from 'express';

import { PERMISSIONS } from '@core/constants';
import withPermissions from '@core/middlewares/withPermissions';
import {
  respondIfError,
  withNotTakenEmail,
  withRequiredEmailField,
  withRequiredPasswordField,
  withValidRolesField,
} from '@core/middlewares/validation';
import { createUser, serializeUser } from '@core/services/User';

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

export default router;
