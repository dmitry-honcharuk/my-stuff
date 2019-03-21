import { PERMISSIONS } from '@core/constants';
import { PermissionRepository } from '@core/repositories';

export const up = async () => {
  await PermissionRepository.create({
    name: PERMISSIONS.USERS_GET_ALL,
  });
};

export const down = async () => {
  await PermissionRepository.destroy({
    where: {
      name: PERMISSIONS.USERS_GET_ALL,
    },
  });
};