import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import totalProductsReducer from './totalProductsReducer';
import productDetailsReducers from './productDetailsReducers';
import productEditModeReducer from './productEditModeReducer';

export default combineReducers({
  products: productsReducer,
  totalProducts: totalProductsReducer,
  productDetails: productDetailsReducers,
  productEditMode: productEditModeReducer,
});
