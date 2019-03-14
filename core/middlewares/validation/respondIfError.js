import { validationResult } from 'express-validator/check';

export const respondIfError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    errors.formatWith(({ value, msg }) => ({ value, msg }));

    return res.status(400).json({ errors: errors.mapped() });
  }

  return next();
};
