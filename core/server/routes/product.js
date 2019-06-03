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

router.get('/', withCurrentUser, respondIfError, (req, res) => {
  // @TODO implement real products retrieval
  return res.json([]);
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
      ? res.json('Something goes wrong')
      : res.json('Product successfully updated');
  },
);

export default router;
