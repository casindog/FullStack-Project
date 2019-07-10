import {
    getProducts
} from '../utils/products_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = () => (dispatch) => {
    return getProducts().then(products => dispatch(receiveProducts(products)))
}

export const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})