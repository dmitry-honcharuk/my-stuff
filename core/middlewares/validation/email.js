import { body } from 'express-validator/check';

export const withRequiredEmailField = body('email')
  .exists()
  .withMessage('Email is required field')
  .isEmail()
  .withMessage('Invalid email');
