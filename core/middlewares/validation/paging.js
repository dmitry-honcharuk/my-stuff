import { query } from 'express-validator/check';
import { sanitizeQuery } from 'express-validator/filter';

const PAGE = 'page';
const PER_PAGE = 'perPage';

export const withOptionalPage = [
  query(PAGE).optional({
    checkNull: true,
    checkFalsy: true,
  }),
  sanitizeQuery(PAGE).toInt(),
];

export const withOptionalPerPage = [
  query(PER_PAGE).optional({
    checkNull: true,
    checkFalsy: true,
  }),
  sanitizeQuery(PER_PAGE).toInt(),
];
