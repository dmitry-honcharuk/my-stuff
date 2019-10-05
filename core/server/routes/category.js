import { Router } from 'express';
import {
  createCategory,
  deleteCategoriesByIds,
  getCategories,
  getCategory,
  updateCategory,
} from '@core/services/Category';
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

router.delete('/', async (req, res) => {
  const { ids } = req.query;

  await deleteCategoriesByIds(ids);
  return res.json(null);
});

router.put('/:id', async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  await updateCategory({
    name,
    categoryId: id,
  });

  return res.json(null);
});

router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;

  const category = await getCategory(id);

  return res.json(category);
});

export default router;
