import {
    getProducts, getProduct, postItem, patchItem
} from '../utils/products_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const CHANGE_FILTER_VIEW = 'CHANGE_FILTER_VIEW';
export const VIEWED_PRODUCTS = 'VIEWED_PRODUCTS';
export const ADD_ITEM = 'ADD_ITEM';

export const viewedProducts = id => ({
    type: VIEWED_PRODUCTS,
    id
})

export const changeFilterView = (view) => ({
    type: CHANGE_FILTER_VIEW,
    view
})


export const addItem = data => ({
    type: ADD_ITEM,
    data
})

export const postItemToCart = data => dispatch => {
    return postItem(data).then(data => dispatch(addItem(data)))
}

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})

export const requestProduct = id => dispatch => {
    return getProduct(id).then(product => dispatch(receiveProduct(product)))
}

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const requestProducts = (data) => dispatch => {
    return getProducts(data).then(products => dispatch(receiveProducts(products)))
}
