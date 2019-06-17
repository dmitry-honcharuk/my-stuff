import {
  COUNT_PRODUCTS_FAILURE,
  COUNT_PRODUCTS_PENDING,
  COUNT_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_PAGE_CHANGE,
  PRODUCTS_PER_PAGE_CHANGE,
} from './types';

export const productsFetched = payload => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const productsFetchFailed = payload => ({
  type: GET_PRODUCTS_FAILURE,
  payload,
});

export const productsFetchStarted = payload => ({
  type: GET_PRODUCTS_PENDING,
  payload,
});

export const productsCounted = payload => ({
  type: COUNT_PRODUCTS_SUCCESS,
  payload,
});

export const productsCountFailed = payload => ({
  type: COUNT_PRODUCTS_FAILURE,
  payload,
});

export const productsCountStarted = payload => ({
  type: COUNT_PRODUCTS_PENDING,
  payload,
});
