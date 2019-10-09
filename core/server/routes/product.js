import { Router } from 'express';
import {
  countAll,
  createProduct,
  deleteProductsByIds,
  getProduct,
  getProducts,
  updateProduct,
} from '@core/services/Product';
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
    const products = await getProducts({ limit, offset });

    return res.json(products);
  },
);

router.get('/count', withCurrentUser, respondIfError, async (req, res) => {
  const total = await countAll();
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

router.get('/:id', withCurrentUser, respondIfError, async (req, res) => {
  const {
    params: { id },
  } = req;

  const product = await getProduct(id);

  return res.json(product);
});

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
    await updateProduct({
      name,
      description,
      productId: id,
    });

    return res.json(null);
  },
);

export default router;
