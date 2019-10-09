import { Category } from '@core/models';

export const createCategory = name =>
  Category.create({
    name,
  });

export const getCategories = ({ offset, limit }) =>
  Category.find()
    .skip(offset)
    .limit(limit);

export const deleteCategoriesByIds = ids =>
  Category.deleteMany({ _id: { $in: ids } });

export const updateCategory = ({ name, categoryId }) =>
  Category.findOneAndUpdate(
    { _id: categoryId },
    {
      name,
    },
  );

export const getCategory = id => Category.findById(id);
