import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import history from './history';

export default composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history)),
);
