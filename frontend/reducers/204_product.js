import merge from 'lodash/merge';

import {
    RECEIVE_PRODUCT,
} from '../actions/products_action';

export default (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_PRODUCT: 
            newState = action.product;

            return newState;
        default:
            return state;
    }
}