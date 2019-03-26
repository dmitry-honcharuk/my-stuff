import { body } from 'express-validator/check';

const NAME_FIELD = 'name';

export const withRequiredNameField = body(NAME_FIELD)
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('Name is required field');
