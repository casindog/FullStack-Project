import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_action';
import { logout } from '../../../actions/session_action';
import { requestProducts, changeFilterView, getCart } from '../../../actions/products_action';

import Navbar from './navbar'

const msp = state => {
    return {
        modal: state.ui.modal,
        email: state.entities.user.email,
        session: state.session
    }
}

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
        requestProducts: data => dispatch(requestProducts(data)),
        changeFilterView: view => dispatch(changeFilterView(view)),
        getCart: data => dispatch(getCart(data))

    }
}

export default connect(msp, mdp)(Navbar);

