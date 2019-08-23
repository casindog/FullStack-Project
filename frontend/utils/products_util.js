export const getProducts = (data) => {
    return $.ajax({
        url: '/api/products',
        method: 'get',
        data: data
    })
}

export const getProduct = id => {
    return $.ajax({
        url: `/api/products/${id}`,
        method: 'get'
    })
}

export const postItem = data => {
    return $.ajax({
        url: `/api/shopping_carts`,
        method: 'post',
        data
    })
}