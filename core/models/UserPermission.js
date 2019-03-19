import { DataTypes } from 'sequelize';
import sequelize from './index';

import User from './User';
import Permission from './Permission';

const UserPermission = sequelize.define(
  'UserPermission',
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    PermissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Permission,
        key: 'id',
      },
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['UserId', 'PermissionId'],
      },
    ],
  },
);

export default UserPermission;
