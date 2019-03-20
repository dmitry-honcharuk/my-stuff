import { body } from 'express-validator/check';

import { isEmailTaken } from '@core/services/User';

const EMAIL_FIELD = 'email';

export const withRequiredEmailField = body(EMAIL_FIELD)
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('Email is required field')
  .isEmail()
  .withMessage('Invalid email');

export const withNotTakenEmail = body(EMAIL_FIELD).custom(async email => {
  const isTaken = await isEmailTaken(email);

  if (isTaken) {
    throw new Error('This email is taken');
  }

  return true;
});
