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

export const patchItem = data => {

    return $.ajax({
        url: `/api/shopping_carts/${data.cart.id}`,
        method: 'patch',
        data
    })
}

// use the index route and then controller file filter on userID
export const fetchCart = data => {
    return $.ajax({
        url: `/api/shopping_carts/`,
        method: 'get',
        data
    })
}

export const deleteItem = data => {
    return $.ajax({
        url: `/api/shopping_carts/${data.cart.id}`,
        method: 'delete',
        data
    })
}