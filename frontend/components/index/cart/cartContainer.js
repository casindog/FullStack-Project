import { connect } from 'react-redux';
import Cart from './cart';
import { removeItemFromCart, requestProduct, patchQtyToCart } from '../../../actions/products_action';

const msp = state => {
    return {
        cartItems: state.entities.cartItems,
        session: state.session
    }
}

const mdp = dispatch => ({
    destroyItem: (data) => dispatch(removeItemFromCart(data)) ,
    getProduct: id => dispatch(requestProduct(id)),
    patchQtyToCart: data => dispatch(patchQtyToCart(data))
    // viewedProducts: id => dispatch(viewedProducts(id))
})

export default connect(msp, mdp)(Cart);