import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import { openModal, closeModal } from '../../actions/modal_action';
import Splash from './splash';

const msp = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        login: formUser => dispatch(login(formUser)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}
export default connect(msp, mdp)(Splash);