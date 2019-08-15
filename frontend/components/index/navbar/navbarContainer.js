import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_action';
import { logout } from '../../../actions/session_action';
import Navbar from './navbar'

// frontend / actions / modal_action.js
// frontend / actions / modal_action.js
// frontend / components / index / navbar / navbarContainer.js
// frontend / components / index / navbar / navbarContainer.js

const msp = state => {
    return {
        modal: state.ui.modal,
        email: state.entities.user.email,
        session_id: state.session.id
    }
}

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Navbar);

