import { Router } from 'express';
import { createProduct } from '@core/services/Product';

const router = Router();

router.post('create', async (req, res) => {
  const { name, description } = req.body;
  const { id } = req.user;
  const product = await createProduct({
    name,
    description,
    userId: id,
  });

  return res.json(product);
});

export default router;
