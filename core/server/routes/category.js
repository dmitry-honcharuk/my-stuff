import { Router } from 'express';
import { createCategory, getCategories } from '@core/services/Category';
import {
  respondIfError,
  withRequiredNameField,
} from '@core/middlewares/validation';
import withPaging from '@core/middlewares/withPaging';

const router = Router();

router.post('/', withRequiredNameField, respondIfError, async (req, res) => {
  const { name } = req.body;
  const category = await createCategory(name);

  return res.json(category);
});

router.get('/', withPaging, respondIfError, async (req, res) => {
  const { limit, offset } = req.paging;
  const categories = await getCategories({
    offset,
    limit,
  });

  return res.json(categories);
});

export default router;
