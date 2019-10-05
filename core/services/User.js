import bcrypt from 'bcrypt-nodejs';
import flatMap from 'lodash/flatMap';
import uniq from 'lodash/uniq';

import { USER_ROLES } from '@common/constants';

import { Role, User } from '@core/models';

export const isEmailTaken = async email => {
  const usersCount = await User.countDocuments({ email });

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

  const roles = await Role.find({
    name: {
      $in: rolesList,
    },
  });

  return User.create({
    email,
    password: hashedPassword,
    roles: roles.map(({ id }) => id),
  });
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await isPasswordSame(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Wrong password');
  }

  return user;
};

export const serializeUser = async userId => {
  const user = await User.findById(userId).populate('roles');
  const rolePermissions = flatMap(user.roles, ({ permissions }) => permissions);

  return {
    id: user.id,
    email: user.email,
    permissions: uniq([...rolePermissions, ...user.personalPermissions]),
  };
};

export const getUsers = () => User.find();
