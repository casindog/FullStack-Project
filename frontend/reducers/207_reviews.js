import merge from 'lodash/merge';

import {
    RECEIVE_REVIEWS
} from '../actions/reviews_action';

export default (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.data;
        default:
            return state;
    }
}