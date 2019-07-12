import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_action';
import { logout } from '../../actions/session_action';
import Navbar from './navbar'


const msp = state => {

    // let x;
    // if (Object.values(state.entities.user)[0] === null) {
    //     x = Object.values(state.entities.user);
    // } else {
    //     x = state.entities.user.email;
    // }    

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

