export const getProducts = (data) => {
    return $.ajax({
        url: '/api/products',
        method: 'get',
        data: data
    })
}