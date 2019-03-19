import { Router } from 'express';
import { createProduct, deleteProductById } from '@core/services/Product';
import withCurrentUser from '@core/middlewares/withCurrentUser';
import {
  withRequiredNameField,
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

router.delete('/:id', withCurrentUser, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProductById(id);
    return res.json(null);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid product id' });
  }
});

export default router;
