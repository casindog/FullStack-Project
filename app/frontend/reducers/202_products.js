import {
    RECEIVE_PRODUCTS,
} from '../actions/products_action';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        default:
            return state;
    }
}