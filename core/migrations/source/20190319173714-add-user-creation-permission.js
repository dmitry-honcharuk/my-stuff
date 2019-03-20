import { PERMISSIONS } from '@core/constants';
import { PermissionRepository } from '@core/repositories';

export const up = async () => {
  await PermissionRepository.create({
    name: PERMISSIONS.USER_CREATE,
  });
};

export const down = async () => {
  await PermissionRepository.destroy({
    where: {
      name: PERMISSIONS.USER_CREATE,
    },
  });
};
