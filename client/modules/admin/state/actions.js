import {
  COUNT_PRODUCTS_FAILURE,
  COUNT_PRODUCTS_PENDING,
  COUNT_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_PENDING,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_SUCCESS,
  PRODUCT_DELETE_FAILURE,
  PRODUCT_DELETE_PENDING,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_EDIT_MODE_DISABLED,
  PRODUCT_EDIT_MODE_ENABLED,
  PRODUCT_UPDATE_FAILURE,
  PRODUCT_UPDATE_PENDING,
  PRODUCT_UPDATE_SUCCESS,
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

export const productDetailsFetched = product => ({
  type: GET_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});

export const productDetailsFetchFailed = error => ({
  type: GET_PRODUCT_DETAILS_FAILURE,
  payload: error,
});

export const productDetailsFetchStarted = () => ({
  type: GET_PRODUCT_DETAILS_PENDING,
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

export const productEditModeEnabled = () => ({
  type: PRODUCT_EDIT_MODE_ENABLED,
});

export const productEditModeDisabled = () => ({
  type: PRODUCT_EDIT_MODE_DISABLED,
});

export const productUpdateStarted = () => ({
  type: PRODUCT_UPDATE_PENDING,
});

export const productUpdated = product => ({
  type: PRODUCT_UPDATE_SUCCESS,
  payload: product,
});

export const productUpdateFailed = error => ({
  type: PRODUCT_UPDATE_FAILURE,
  payload: error,
});

export const productDeleteStarted = () => ({
  type: PRODUCT_DELETE_PENDING,
});

export const productDeleted = (productId, meta = {}) => ({
  type: PRODUCT_DELETE_SUCCESS,
  payload: productId,
  meta,
});

export const productDeleteFailed = error => ({
  type: PRODUCT_DELETE_FAILURE,
  payload: error,
});
