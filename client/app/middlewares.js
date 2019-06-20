import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import adminMiddlewares from '@client/modules/admin/middlewares';

import history from './history';

export default composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history), ...adminMiddlewares),
);
