import merge from 'lodash/merge';

import {
    RECEIVE_REVIEWS, RECEIVE_REVIEW
} from '../actions/reviews_action';

export default (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.data;
        // case RECEIVE_REVIEW:
        //     return action.data;
        default:
            return state;
    }
}