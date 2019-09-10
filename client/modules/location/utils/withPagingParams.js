import { withRouter } from 'react-router';
import { compose, withProps } from 'recompose';
import queryString from 'query-string';

import { PAGING } from '@common/constants';

import { toNumber } from '@client/utils/number';

const { PAGE, PER_PAGE } = PAGING;

export default compose(
  withRouter,
  withProps(({ location }) => {
    const { search } = location;
    const params = queryString.parse(search);

    const { page: pageString, perPage: perPageString } = params;

    const page = toNumber(pageString, PAGE);
    const perPage = toNumber(perPageString, PER_PAGE);

    return {
      page,
      perPage,
      limit: perPage,
      offset: (page - 1) * perPage,
    };
  }),
);
