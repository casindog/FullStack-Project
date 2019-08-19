import merge from 'lodash/merge';

import {
    RECEIVE_PRODUCTS,
} from '../actions/products_action';

export default (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            // kc: the last name/value pair from action.products is the shuffle.
            // that's why we are getting an extra element.
            // remove the last name value pair. 
            newState = merge({}, state, action.products);
            delete newState.shuffle;
            return newState;
        default:
            return state;
    }
}