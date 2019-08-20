import { combineReducers } from 'redux';

import usersReducer from './201_users';
import productsReducer from './202_products';
import filterViewsReducer from './203_filterViews';

export default combineReducers({
    user: usersReducer,
    products: productsReducer,
    filterView: filterViewsReducer
});
