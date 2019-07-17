import { Router } from 'express';
import { createCategory } from '@core/services/Category';
import {
  respondIfError,
  withRequiredNameField,
} from '@core/middlewares/validation';

const router = Router();

router.post('/', withRequiredNameField, respondIfError, async (req, res) => {
  const { name } = req.body;
  const category = await createCategory(name);

  return res.json(category);
});

export default router;
