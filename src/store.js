import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { userLoginReducer } from './reducers/userReducer.js';

const initialState = {};

const reducer = combineReducers({
  userLogin: userLoginReducer
})

const composeEnhancer = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))); 

export default store;