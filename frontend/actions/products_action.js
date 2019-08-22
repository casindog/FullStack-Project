import {
    getProducts, getProduct
} from '../utils/products_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const CHANGE_FILTER_VIEW = 'CHANGE_FILTER_VIEW';


export const changeFilterView = (view) => ({
    type: CHANGE_FILTER_VIEW,
    view
})

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
