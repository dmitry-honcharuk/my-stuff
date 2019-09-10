import { body } from 'express-validator/check';

import { USER_ROLES } from '@common/constants';
import { isSubsetOf } from '@core/utils/collection';

const FIELD = 'roles';

export const withValidRolesField = body(FIELD)
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('Roles is required field')
  .isArray()
  .withMessage('Roles should be an array')
  .custom(roles => {
    if (roles.length === 0) {
      throw new Error('Roles cannot be empty');
    }

    return true;
  })
  .custom(roles => {
    const rolesPool = Object.values(USER_ROLES);
    const isRolesSubset = isSubsetOf(rolesPool);

    if (!isRolesSubset(roles)) {
      throw new Error('Invalid role');
    }

    return true;
  });
