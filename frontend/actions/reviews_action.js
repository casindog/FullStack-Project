import {
    getReviews
} from '../utils/reviews_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveReviews = data => ({
    type: RECEIVE_REVIEWS,
    data
})

export const fetchReviews = (id) => dispatch => {
    return getReviews(id).then(id => dispatch(receiveReviews(id)))
}
