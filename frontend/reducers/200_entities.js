import { combineReducers } from 'redux';

import usersReducer from './201_users';
import productReducer from './204_product'
import productsReducer from './202_products';
import filterViewsReducer from './203_filterViews';
import viewedProductsReducer from './205_viewedProducts';

export default combineReducers({
    user: usersReducer,
    product: productReducer,
    products: productsReducer,
    filterView: filterViewsReducer,
    viewedProducts: viewedProductsReducer
});
