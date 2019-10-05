import { PERMISSIONS, USER_ROLES } from '@common/constants';
import Role from '@core/models/Role';

import connected from '../utils/connected';

export const up = connected(async () => {
  const permissions = Object.values(PERMISSIONS);

  await Role.create([
    {
      name: USER_ROLES.ADMIN,
      permissions,
    },
    {
      name: USER_ROLES.SELLER,
    },
  ]);
});

export const down = connected(async () => {
  await Role.deleteMany({
    name: {
      $in: Object.keys(USER_ROLES),
    },
  });
});
