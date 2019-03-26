import { body } from 'express-validator/check';

const PASSWORD = 'password';
const PASSWORD_CONFIRM = 'passwordConfirm';

export const withRequiredPasswordField = body(PASSWORD)
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('Password is required field');

export const withRequiredPasswordConfirmationField = body(PASSWORD_CONFIRM)
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('Password confirmation is required field');

export const withPasswordConfirmation = [
  withRequiredPasswordField,
  withRequiredPasswordConfirmationField,
  body(PASSWORD_CONFIRM).custom((confirm, { req }) => {
    const { password } = req.body;

    if (password !== confirm) {
      throw new Error('Password confirmation does not match password');
    }

    return true;
  }),
];
