import { query, param } from 'express-validator/check';
import { isUserOwner } from '@core/services/Product';

const FIELD = 'ids';
const PRODUCT_ID = 'id';

export const shouldBeProductsOwner = query(FIELD)
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('Ids are required')
  .isArray()
  .withMessage('Ids should be an array')
  .custom(async (ids, { req }) => {
    const { id: userId } = req.user;
    const isOwner = await isUserOwner(userId, ids);

    if (!isOwner) {
      throw new Error('Invalid product id');
    }

    return true;
  });

export const shouldBeProductOwner = param(PRODUCT_ID)
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('Id is required')
  .custom(async (id, { req }) => {
    const { id: userId } = req.user;
    const isOwner = await isUserOwner(userId, [id]);

    if (!isOwner) {
      throw new Error('Invalid product id');
    }

    return true;
  });
