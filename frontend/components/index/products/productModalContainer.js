import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductModal from './productModal';
import { postItemToCart, patchQtyToCart } from '../../../actions/products_action';
import { createReview } from '../../../actions/reviews_action';

const msp = state => {
    return {
        product: state.entities.product,
        session: state.session,
        modal: state.ui.modal,
        errors: state.errors.session,
        cartItems: state.entities.cartItems,
        reviews: state.entities.reviews
    }
}

const mdp = dispatch => {
    return {
        postItemToCart: data => dispatch(postItemToCart(data)),
        patchQtyToCart: data => dispatch(patchQtyToCart(data)),
        createReview: data => dispatch(createReview(data))
    }
}

export default withRouter(connect(msp, mdp)(ProductModal));