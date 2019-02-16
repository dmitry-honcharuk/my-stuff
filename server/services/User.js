import UserModel from '../models/User';

export const isEmailTaken = async email => {
  const usersCount = await UserModel.count({
    where: { email },
  });

  return usersCount !== 0;
};

export const createUser = ({ email, password }) =>
  UserModel.create({ email, password });
