import { body } from 'express-validator/check';

export const withRequiredPasswordField = body('password')
  .exists()
  .withMessage('Password is required field');
