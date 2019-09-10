import { PERMISSIONS, USER_ROLES } from '@common/constants';
import {
  PermissionRepository,
  RolePermissionRepository,
  RoleRepository,
} from '@core/repositories';

const getRole = name =>
  RoleRepository.findOne({
    attributes: ['id'],
    where: {
      name,
    },
  });

const getPermission = name =>
  PermissionRepository.findOne({
    attributes: ['id'],
    where: {
      name,
    },
  });

export const up = async () => {
  const [{ id: roleId }, { id: permissionId }] = await Promise.all([
    getRole(USER_ROLES.ADMIN),
    getPermission(PERMISSIONS.USERS_CREATE),
  ]);

  await RolePermissionRepository.create({
    RoleId: roleId,
    PermissionId: permissionId,
  });
};

export const down = async () => {
  const [{ id: roleId }, { id: permissionId }] = await Promise.all([
    getRole(USER_ROLES.ADMIN),
    getPermission(PERMISSIONS.USERS_CREATE),
  ]);

  await RolePermissionRepository.destroy({
    where: {
      RoleId: roleId,
      PermissionId: permissionId,
    },
  });
};
