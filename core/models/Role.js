import { DataTypes } from 'sequelize';
import sequelize from './index';

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

export default Role;
