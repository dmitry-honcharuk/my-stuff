import { push } from 'connected-react-router';

import { getPatchedSearchQuery } from '../utils';

import { pageUpdated, perPageUpdated } from './actions';

export const updatePage = page => dispatch => {
  const search = getPatchedSearchQuery({ page });

  dispatch(push({ search }));
  return dispatch(pageUpdated(page));
};

export const updatePerPage = perPage => dispatch => {
  const search = getPatchedSearchQuery({ perPage });

  dispatch(push({ search }));
  return dispatch(perPageUpdated(perPage));
};
