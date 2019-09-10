import { PERMISSIONS } from '@common/constants';
import { PermissionRepository } from '@core/repositories';

export const up = async () => {
  await PermissionRepository.create({
    name: PERMISSIONS.USERS_CREATE,
  });
};

export const down = async () => {
  await PermissionRepository.destroy({
    where: {
      name: PERMISSIONS.USERS_CREATE,
    },
  });
};
