import { CategoryRepository, ProductRepository } from '@core/repositories';

export const createCategory = name =>
  CategoryRepository.create({
    name,
  });

export const getCategories = ({ offset, limit }) =>
  CategoryRepository.findAll({
    offset,
    limit,
  });

export const deleteCategoriesByIds = ids =>
  CategoryRepository.destroy({ where: { id: ids } });
