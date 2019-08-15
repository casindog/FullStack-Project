import { connect } from 'react-redux';
import Profile from './profile';
import { openModal, closeModal } from '../../../../actions/modal_action';
import { logout } from '../../../../actions/session_action';

const msp = state => {
    return {
        email: state.entities.user.email
    }
}

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Profile);