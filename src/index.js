<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import postReducer from './store/post-reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// create a middleware

const datetime = (store) => (next) => (action) => {
  console.log('dispatched at ', new Date());
  let result = next(action);
  // console.log('next state', store.getState())
  return result;
};

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(datetime, logger, thunkMiddleware)
  // other store enhancers if any
);

// store with reducer
// Create a Store - state container
const store = createStore(postReducer, composedEnhancer);
// const store = createStore(employeeReducer, composedEnhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
>>>>>>> 2f8f9a2354de5ffdc1342e30a41ae9c0f87d514c
