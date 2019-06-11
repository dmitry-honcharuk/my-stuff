import { Router } from 'express';
import {
  createProduct,
  deleteProductsByIds,
  updateProduct,
} from '@core/services/Product';
import { ProductRepository } from '@core/repositories';
import withCurrentUser from '@core/middlewares/withCurrentUser';
import withPaging from '@core/middlewares/withPaging';
import {
  respondIfError,
  shouldBeProductOwner,
  shouldBeProductsOwner,
  withRequiredNameField,
} from '@core/middlewares/validation';

const router = Router();

router.get(
  '/',
  withCurrentUser,
  withPaging,
  respondIfError,
  async (req, res) => {
    const { limit, offset } = req.paging;
    const products = await ProductRepository.findAll({
      offset,
      limit,
    });

    return res.json(products);
  },
);

router.get('/count', withCurrentUser, respondIfError, async (req, res) => {
  const total = await ProductRepository.count();
  return res.json({ total });
});

router.post(
  '/',
  withCurrentUser,
  withRequiredNameField,
  respondIfError,
  async (req, res) => {
    const { name, description } = req.body;
    const { id } = req.user;
    const product = await createProduct({
      name,
      description,
      userId: id,
    });

    return res.json(product);
  },
);

router.delete(
  '/',
  withCurrentUser,
  shouldBeProductsOwner,
  respondIfError,
  async (req, res) => {
    const { ids } = req.query;

    await deleteProductsByIds(ids);
    return res.json(null);
  },
);

router.put(
  '/:id',
  withCurrentUser,
  shouldBeProductOwner,
  respondIfError,
  async (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;
    const [updatedProductsCount] = await updateProduct({
      name,
      description,
      productId: id,
    });

    return updatedProductsCount === 0
      ? res.status(400).json({ error: 'Invalid product' })
      : res.json(null);
  },
);

export default router;
