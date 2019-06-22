import axios from 'axios';
import queryString from 'query-string';

import {
  productDetailsFetched,
  productDetailsFetchFailed,
  productDetailsFetchStarted,
  productEditModeDisabled,
  productEditModeEnabled,
  productsCounted,
  productsCountFailed,
  productsCountStarted,
  productsFetched,
  productsFetchFailed,
  productsFetchStarted,
} from './actions';

export const fetchProducts = ({ page = 1, perPage = 10 }) => async dispatch => {
  dispatch(productsFetchStarted());

  try {
    const query = queryString.stringify({ page, perPage });
    const { data: products } = await axios.get(`/api/products?${query}`);
    dispatch(productsFetched(products));
  } catch ({ response: { data } }) {
    dispatch(productsFetchFailed(data));
  }
};

export const fetchProductDetails = id => async dispatch => {
  dispatch(productDetailsFetchStarted());

  try {
    const { data: product } = await axios.get(`/api/products/${id}`);
    dispatch(productDetailsFetched(product));
  } catch ({ response: { data } }) {
    dispatch(productDetailsFetchFailed(data));
  }
};

export const countProducts = () => async dispatch => {
  dispatch(productsCountStarted());

  try {
    const {
      data: { total },
    } = await axios.get('/api/products/count');
    dispatch(productsCounted(total));
  } catch ({ response: { data } }) {
    dispatch(productsCountFailed(data));
  }
};

export const enableProductEditMode = productEditModeEnabled;
export const disableProductEditMode = productEditModeDisabled;
