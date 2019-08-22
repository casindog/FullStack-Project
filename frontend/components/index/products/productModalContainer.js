import { connect } from 'react-redux';
import ProductModal from './productModal';
import { closeModal, openModal } from '../../../actions/modal_action';

const msp = state => {
    return {
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
        }
    }
}

export default connect(msp, mdp)(ProductModal);