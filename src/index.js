import React from 'react';
import ReactDOM from 'react-dom';
// compose allows you to chain different functions and chain middlewares together.
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import collectionReducer from './reducers/collectionReducer';


import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// set up our store
const store = createStore(collectionReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

