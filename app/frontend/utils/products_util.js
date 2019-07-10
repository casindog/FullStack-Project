export const getProducts = () => {
    return $.ajax({
        url: '/api/products',
        method: 'get'
    })
}