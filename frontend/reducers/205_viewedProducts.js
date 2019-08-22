import merge from 'lodash/merge';

import {
    VIEWED_PRODUCTS,
} from '../actions/products_action';

export default (state = [], action) => {
    // let newState;
    switch (action.type) {
        case VIEWED_PRODUCTS:
            state.push(action.id)
            return state;
        default:
            return state;
    }
}