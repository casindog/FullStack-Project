import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductModal from './productModal';
import { closeModal, openModal } from '../../../actions/modal_action';
import { postItemToCart, patchQtyToCart } from '../../../actions/products_action';

const msp = state => {
    return {
        product: state.entities.product,
        session: state.session,
        modal: state.ui.modal,
        errors: state.errors.session,
        cartItems: state.entities.cartItems
    }
}

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: (e) => {
            e.stopPropagation();
            dispatch(closeModal());
        },
        postItemToCart: data => dispatch(postItemToCart(data)),
        patchQtyToCart: data => dispatch(patchQtyToCart(data))
    }
}

export default withRouter(connect(msp, mdp)(ProductModal));