import { Router } from 'express';
import {
  createProduct,
  deleteProductsByIds,
  updateProduct,
} from '@core/services/Product';
import withCurrentUser from '@core/middlewares/withCurrentUser';
import {
  withRequiredNameField,
  shouldBeProductsOwner,
  shouldBeProductOwner,
  respondIfError,
} from '@core/middlewares/validation';

const router = Router();

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
  '/',
  withCurrentUser,
  shouldBeProductOwner,
  respondIfError,
  async (req, res) => {
    const { name, description } = req.body;
    const { id } = req.query;
    const updatedProduct = await updateProduct({
      name,
      description,
      productId: id,
    });

    return res.json(updatedProduct);
  },
);

export default router;
