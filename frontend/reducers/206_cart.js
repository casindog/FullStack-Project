import merge from 'lodash/merge';

import {
    ADD_ITEM, RECEIVE_CART
} from '../actions/products_action';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return action.data;
        case RECEIVE_CART:
            return action.data;
        default:
            return state;
    }
}