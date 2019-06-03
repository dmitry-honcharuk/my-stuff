import { Router } from 'express';
import { createProduct, deleteProductsByIds } from '@core/services/Product';
import withCurrentUser from '@core/middlewares/withCurrentUser';
import {
  withRequiredNameField,
  shouldBeOwner,
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
  shouldBeOwner,
  respondIfError,
  async (req, res) => {
    const { ids } = req.query;

    await deleteProductsByIds(ids);
    return res.json(null);
  },
);

export default router;
