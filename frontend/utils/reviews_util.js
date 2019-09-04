export const getReviews = id => {
    return $.ajax({
        url: `/api/reviews/${id}`,
        method: 'get'
    })
}

export const postReview = data => {
    return $.ajax({
        url: `/api/reviews`,
        method: 'post',
        data
    })
}
