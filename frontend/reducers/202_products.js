import merge from 'lodash/merge';

import {
    RECEIVE_PRODUCTS,
} from '../actions/products_action';

export default (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            newState = merge({}, action.products);
            delete newState.shuffle;
            return newState;
        default:
            return state;
    }
}