import { Op } from 'sequelize';
import bcrypt from 'bcrypt-nodejs';

import { USER_ROLES } from '@core/constants';
import { dbTransaction } from '@core/utils';
import {
  RoleRepository,
  UserRepository,
  UserRoleRepository,
} from '@core/repositories';

import { getUserPermissions } from './Permissions';

export const isEmailTaken = async email => {
  const usersCount = await UserRepository.count({
    where: { email },
  });

  return usersCount !== 0;
};

export const hashPassword = (pass, saltRounds) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, salt, null, (err, hash) => {
      if (err) {
        return reject(err);
      }
      return resolve(hash);
    });
  });
};

export const isPasswordSame = (pass, encryptedPass) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, encryptedPass, (err, same) => {
      if (err) {
        return reject(err);
      }
      return resolve(same);
    });
  });
};

export const createUser = async ({
  email,
  password,
  roles: rolesList = [USER_ROLES.SELLER],
}) => {
  const hashedPassword = await hashPassword(password, 10);
  const roles = await RoleRepository.findAll({
    attributes: ['id'],
    where: {
      name: {
        [Op.in]: rolesList,
      },
    },
  });

  return dbTransaction(async transaction => {
    const user = await UserRepository.create(
      {
        email,
        password: hashedPassword,
      },
      { transaction },
    );

    await UserRoleRepository.bulkCreate(
      roles.map(({ id }) => ({
        UserId: user.id,
        RoleId: id,
      })),
      { transaction },
    );
    return user;
  });
};

export const login = async ({ email, password }) => {
  const user = await UserRepository.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await isPasswordSame(password, user.password);
  if (isPasswordValid) {
    return user;
  }
};

export const getUser = (id, query = {}) =>
  UserRepository.findOne({
    where: {
      id,
    },
    ...query,
  });

export const getUserRoles = async userId => {
  const roles = await RoleRepository.findAll({
    attributes: ['name'],
    include: [
      {
        model: UserRepository.getModel(),
        where: {
          id: userId,
        },
      },
    ],
  });

  return roles.map(({ name }) => name);
};

export const serializeUser = async userId => {
  const [user, roles, permissions] = await Promise.all([
    getUser(userId, {
      attributes: ['email'],
    }),
    getUserRoles(userId),
    getUserPermissions(userId),
  ]);

  return {
    id: userId,
    email: user.email,
    roles,
    permissions,
  };
};
