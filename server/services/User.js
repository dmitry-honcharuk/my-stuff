import UserModel from '../models/User';
import bcrypt from 'bcrypt-nodejs';

export const isEmailTaken = async email => {
  const usersCount = await UserModel.count({
    where: { email },
  });

  return usersCount !== 0;
};

export const hashPassword = (pass, saltRounds) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, salt, null, (err, hash) => {
      if(err) {
        return reject(err);
      }
      return resolve(hash);
    })
  })
};

export const comparePassword = (pass, encryptedPass) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, encryptedPass, (err, same) => {
      if(err) {
        return reject(err);
      }
      return resolve(same);
    })
  })
};

export const createUser = async ({ email, password }) => {
  const hashedPassword = await hashPassword(password, 10);
  return UserModel.create({ email, password: hashedPassword });
};

export const login = async ({ email, password }) => {
  const user = await UserModel.findOne({ where: { email } });
  const isPassSame = await comparePassword(password, user.password);
  if(isPassSame) {
    return user;
  }
};

export const getUserById = id =>
    UserModel.findByPk(id);
