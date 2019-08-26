import { connect } from 'react-redux';
import Cart from './cart';
import { removeItemFromCart, patchQtyToCart } from '../../../actions/products_action';

const msp = state => {
    return {
        cartItems: state.entities.cartItems
    }
}

const mdp = dispatch => ({
    destroyItem: (data) => dispatch(removeItemFromCart(data)) 
    // getProduct: id => dispatch(requestProduct(id)),
    // viewedProducts: id => dispatch(viewedProducts(id))
    
    
})

export default connect(msp, mdp)(Cart);