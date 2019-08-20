import merge from 'lodash/merge';

import {
    CHANGE_FILTER_VIEW,
} from '../actions/products_action';

export default (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case CHANGE_FILTER_VIEW:
            newState = action.view;
            return newState;
        default:
            return state;
    }
}