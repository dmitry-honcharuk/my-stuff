import { Router } from 'express';
import { createProduct } from '@core/services/Product';
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

export default router;
