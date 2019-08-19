import {
    getProducts
} from '../utils/products_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const requestProducts = (data) => dispatch => {
    return getProducts(data).then(products => dispatch(receiveProducts(products)))
}
