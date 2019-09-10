import { PAGING } from '@common/constants';

import { withOptionalPage, withOptionalPerPage } from './validation/paging';

const { PAGE, PER_PAGE } = PAGING;

export default [
  withOptionalPage,
  withOptionalPerPage,
  (req, res, next) => {
    const { page = PAGE, perPage = PER_PAGE } = req.query;

    req.paging = {
      page,
      perPage,
      limit: perPage,
      offset: (page - 1) * perPage,
    };

    return next();
  },
];
