import { DataTypes } from 'sequelize';
import sequelize from './index';

import Role from './Role';
import RolePermission from './RolePermission';

import User from './User';
import UserPermission from './UserPermission';

const Permission = sequelize.define(
  'Permission',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['name'],
      },
    ],
  },
);

Role.belongsToMany(Permission, { through: RolePermission });
Permission.belongsToMany(Role, { through: RolePermission });

User.belongsToMany(Permission, { through: UserPermission });
Permission.belongsToMany(User, { through: UserPermission });

export default Permission;
