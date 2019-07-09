import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session_action';
import { openModal, closeModal } from '../../actions/modal_action';
import Signup from './signup';

const msp = ({ errors }) => {
    return {
        errors: errors.session
    }
}

const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(Signup);