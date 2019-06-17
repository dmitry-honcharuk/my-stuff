import axios from 'axios';
import queryString from 'query-string';

import {
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
