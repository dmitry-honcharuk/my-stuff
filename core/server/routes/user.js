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

const router = Router();

router.post(
  '/',
  withPermissions([PERMISSIONS.USER_CREATE]),
  withValidRolesField,
  withRequiredPasswordField,
  withRequiredEmailField,
  withNotTakenEmail,
  respondIfError,
  (req, res) => {
    return res.json({ success: true });
  },
);

export default router;
