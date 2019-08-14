import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/000_root';

const configureStore = (preloadedstate) => (
    createStore(rootReducer, preloadedstate, applyMiddleware(thunk, logger))
);

export default configureStore;
