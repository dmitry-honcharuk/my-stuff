import UserModel from '../models/User';
import bcrypt from 'bcrypt-nodejs';


export const isEmailTaken = async email => {
  const usersCount = await UserModel.count({
    where: { email },
  });

  return usersCount !== 0;
};

export const createUser = async ({ email, password }) =>
  UserModel.create({ email, password });

export const hashedPassword = (pass, saltRounds) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, salt, null, (err, hash) => {
      if(err) {
        return reject(err);
      }
      return resolve(hash);
    })
  })
}

export const login = ({ email, password }) => {
  return UserModel.findOne({ where: { email, password } });
}
