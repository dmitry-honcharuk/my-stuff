import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import middlewares from './middlewares';

import App from './App';

const store = createStore(reducers, middlewares);

const app = document.querySelector('#app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
);
