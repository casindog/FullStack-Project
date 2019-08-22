import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductModal from './productModal';
import { closeModal, openModal } from '../../../actions/modal_action';
import { getProduct } from '../../../actions/modal_action';

const msp = state => {
    return {
        product: state.entities.product,
        modal: state.ui.modal,
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: (e) => {
            e.stopPropagation();
            dispatch(closeModal());
        },
        getProduct: id => dispatch(getProduct(id))
    }
}

export default withRouter(connect(msp, mdp)(ProductModal));