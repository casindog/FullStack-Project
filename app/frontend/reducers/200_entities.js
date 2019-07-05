import { combineReducers } from 'redux';

import usersReducer from './201_users';
// import products from './products';

export default combineReducers({
    user: usersReducer
});
