import { stringify } from 'query-string';

export const addQueryParams = queryParams => base =>
  `${base}?${stringify(queryParams)}`;
