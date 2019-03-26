import { ProductRepository } from '@core/repositories';
import { Op } from 'sequelize';

export const createProduct = ({ name, description, userId }) =>
  ProductRepository.create({
    name,
    description,
    UserId: userId,
  });

export const deleteProductsByIds = ids =>
  ProductRepository.destroy({ where: { id: ids } });

export const isUserOwner = async (userId, productsIds) => {
  const productsCount = await ProductRepository.count({
    where: {
      UserId: userId,
      id: {
        [Op.in]: productsIds,
      },
    },
  });

  return productsIds.length === productsCount;
};
