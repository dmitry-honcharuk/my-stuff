import axios from 'axios';

import {
  productsFetched,
  productsFetchStarted,
  productsFetchFailed,
} from './actions';

export const fetchProducts = () => async dispatch => {
  dispatch(productsFetchStarted());

  try {
    const { data: products } = await axios.get('/api/products');
    dispatch(productsFetched(products));
  } catch ({ response: { data } }) {
    dispatch(productsFetchFailed(data));
  }
};
