import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import Login from './login';
import { openModal, closeModal } from '../../actions/modal_action';

const msp = ({ errors }) => {
    return {
        errors: errors.session
    }
}

const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    // what's the point of this?
    // otherForm: (
    //     <button onClick={() => dispatch(openModal('signup'))}>
    //         Signup
    //     </button>
    // ),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(Login);