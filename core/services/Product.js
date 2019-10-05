import { Product } from '@core/models';

export const getProduct = id => Product.findById(id);

export const getProducts = ({ limit, offset }) =>
  Product.find()
    .skip(offset)
    .limit(limit);

export const countAll = () => Product.countDocuments();

export const createProduct = ({ name, description, userId }) =>
  Product.create({
    name,
    description,
    user: userId,
  });

export const updateProduct = ({ name, description, productId }) =>
  Product.findOneAndUpdate(
    { _id: productId },
    {
      name,
      description,
    },
  );

export const deleteProductsByIds = ids =>
  Product.deleteMany({ _id: { $in: ids } });

export const isUserOwner = async (userId, productsIds) => {
  const productsCount = await Product.countDocuments({
    user: userId,
    _id: {
      $in: productsIds,
    },
  });

  return productsIds.length === productsCount;
};
