import { DataTypes } from 'sequelize';
import sequelize from './index';

import Role from './Role';
import Permission from './Permission';

const RolePermission = sequelize.define(
  'RolePermission',
  {
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
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
        fields: ['RoleId', 'PermissionId'],
      },
    ],
  },
);

export default RolePermission;
