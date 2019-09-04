export const getReviews = id => {
    return $.ajax({
        url: `/api/reviews/${id}`,
        method: 'get',
    })
}
