import merge from 'lodash/merge';

import {
    ADD_ITEM,
} from '../actions/products_action';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return action.data;
        default:
            return state;
    }
}

ADD_ITEM