import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import totalProductsReducer from './totalProductsReducer';

export default combineReducers({
  products: productsReducer,
  totalProducts: totalProductsReducer,
});
