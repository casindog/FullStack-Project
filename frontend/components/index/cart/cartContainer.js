import { connect } from 'react-redux';
import Cart from './cart';

const msp = state => {
    return {
        cartItems: state.entities.cartItems
    }
}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Cart);