import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import postReducer from './store/post-reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const datetime = (store) => (next) => (action) => {
  console.log('dispatched at ', new Date());
  let result = next(action);
  return result;
};

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const composedEnhancer = composeWithDevTools(
  applyMiddleware(datetime, logger, thunkMiddleware)
);

const store = createStore(postReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
