import { DataTypes } from 'sequelize';
import sequelize from './index';

import UserRole from './UserRole';
import User from './User';

const Role = sequelize.define(
  'Role',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

export default Role;
