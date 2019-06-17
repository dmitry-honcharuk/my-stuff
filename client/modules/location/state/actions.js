import { UPDATE_PAGE, UPDATE_PER_PAGE } from './types';

export const pageUpdated = page => ({
  type: UPDATE_PAGE,
  payload: { page },
});

export const perPageUpdated = perPage => ({
  type: UPDATE_PER_PAGE,
  payload: { perPage },
});
