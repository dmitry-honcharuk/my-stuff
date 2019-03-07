import { DataTypes } from 'sequelize';

import sequelize from './index';

import User from './User';
import Role from './Role';

const UserRole = sequelize.define(
  'UserRole',
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: 'id',
      },
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['UserId', 'RoleId'],
      },
    ],
  },
);

export default UserRole;
