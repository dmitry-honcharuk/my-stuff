import { Op } from 'sequelize';

import PermissionRepository from '@core/repositories/Permission';
import UserRepository from '@core/repositories/User';
import RoleRepository from '@core/repositories/Role';

import { getUniqueFields } from '@core/utils/collection';

import { getUserRoles } from './User';

const getUniqueNames = getUniqueFields('name');

const getPersonalPermissions = userId =>
  PermissionRepository.findAll({
    attributes: ['name'],
    include: [
      {
        model: UserRepository.getModel(),
        attributes: [],
        where: {
          id: userId,
        },
      },
    ],
  });

const getRolePermissions = async userId => {
  const roles = await getUserRoles(userId);

  return PermissionRepository.findAll({
    attributes: ['name'],
    include: [
      {
        model: RoleRepository.getModel(),
        attributes: [],
        where: {
          name: {
            [Op.in]: roles,
          },
        },
      },
    ],
  });
};

export const getUserPermissions = async userId => {
  const [personalPermissions, rolePermissions] = await Promise.all([
    getPersonalPermissions(userId),
    getRolePermissions(userId),
  ]);

  return getUniqueNames([...personalPermissions, ...rolePermissions]);
};
