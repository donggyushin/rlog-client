import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import auth from "./auth";

const initialState = {};

const allReducers = combineReducers({
    auth
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;