import { CategoryRepository } from '@core/repositories';

export const createCategory = name =>
  CategoryRepository.create({
    name,
  });
