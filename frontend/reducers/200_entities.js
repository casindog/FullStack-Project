import { combineReducers } from 'redux';

import usersReducer from './201_users';
import productsReducer from './202_products';

export default combineReducers({
    user: usersReducer,
    products: productsReducer
});
