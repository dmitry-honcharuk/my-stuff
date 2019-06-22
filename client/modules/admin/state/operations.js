import axios from 'axios';
import queryString from 'query-string';

import {
  productDeleted,
  productDeleteFailed,
  productDeleteStarted,
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
  productUpdated,
  productUpdateFailed,
  productUpdateStarted,
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

export const updateProduct = (productId, productFields) => async dispatch => {
  dispatch(productUpdateStarted());

  try {
    const { data: products } = await axios.put(
      `/api/products/${productId}`,
      productFields,
    );
    dispatch(productUpdated(productFields));
  } catch ({ response: { data } }) {
    dispatch(productUpdateFailed(data));
  }
};

export const removeProduct = productId => async dispatch => {
  dispatch(productDeleteStarted());

  try {
    const ids = [productId];
    const query = queryString.stringify({ ids }, { arrayFormat: 'bracket' });

    await axios.delete(`/api/products?${query}`);

    dispatch(productDeleted(productId, { redirect: '/products' }));
  } catch ({ response: { data } }) {
    dispatch(productDeleteFailed(data));
  }
};
