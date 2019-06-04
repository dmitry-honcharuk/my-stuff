import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import productsPaginationReducer from './productsPaginationReducer';

export default combineReducers({
  products: productsReducer,
  productsPagination: productsPaginationReducer,
});
