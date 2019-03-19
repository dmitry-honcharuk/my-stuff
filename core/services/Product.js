import { ProductRepository } from '@core/repositories';

export const createProduct = ({ name, description, userId }) =>
  ProductRepository.create({
    name,
    description,
    UserId: userId,
  });
