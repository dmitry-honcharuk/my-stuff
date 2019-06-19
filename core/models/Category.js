import { DataTypes } from 'sequelize';
import sequelize from './index';

import Product from './Product';
import ProductCategory from './ProductCategory';

const Category = sequelize.define(
  'Category',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    name: {
      singular: 'Category',
      plural: 'Categories',
    },
  },
);

Category.belongsToMany(Product, { through: ProductCategory });
Product.belongsToMany(Category, { through: ProductCategory });

export default Category;
