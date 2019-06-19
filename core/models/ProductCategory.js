import { DataTypes } from 'sequelize';
import sequelize from './index';

const ProductCategory = sequelize.define(
  'ProductCategory',
  {
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'ProductCategory',
      plural: 'ProductCategories',
    },
  },
);

export default ProductCategory;
