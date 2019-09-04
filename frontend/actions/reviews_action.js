import {
    getReviews, postReview
} from '../utils/reviews_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveReviews = data => ({
    type: RECEIVE_REVIEWS,
    data
})

export const fetchReviews = (id) => dispatch => {
    return getReviews(id).then(id => dispatch(receiveReviews(id)))
}


// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

// export const receiveReview = data => ({
//     type: RECEIVE_REVIEW,
//     data
// })

export const createReview = data => dispatch => {
    return postReview(data).then(data => dispatch(receiveReviews(data)))
}