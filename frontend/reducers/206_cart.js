import merge from 'lodash/merge';

import {
    ADD_ITEM, RECEIVE_CART, CHANGE_QTY, REMOVE_ITEM
} from '../actions/products_action';

export default (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ADD_ITEM:
            return action.data;
        case RECEIVE_CART:
            return action.data;
        case CHANGE_QTY:
            newState = merge({}, state);
            newState[action.data.id].quantity = action.data.quantity;
            return newState;
        case REMOVE_ITEM:
            newState = merge({}, state);
            delete newState[action.data.deletedId];
            return newState
        default:
            return state;
    }
}