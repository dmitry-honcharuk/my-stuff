import { ProductRepository } from '@core/repositories';

export const createProduct = async ({ name, description, userId }) => {
  const product = await ProductRepository.create({
    name,
    description,
    UserId: userId,
  });

  return product;
};
