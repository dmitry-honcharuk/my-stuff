import { body } from 'express-validator/check';

const NAME_FIELD = 'name';

export const withRequiredNameField = body(NAME_FIELD)
  .exists()
  .withMessage('Name is required field');
