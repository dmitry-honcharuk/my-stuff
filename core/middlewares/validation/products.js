import { query } from 'express-validator/check';
import { isUserOwner } from '@core/services/Product';

const FIELD = 'ids';

export const shouldBeOwner = query(FIELD)
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
