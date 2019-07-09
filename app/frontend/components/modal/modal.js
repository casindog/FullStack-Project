import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_action';
import LoginFormContainer from '../session/login_container';
import SignupFormContainer from '../session/signup_container';
import ProfileNavBarContainer from '../navbar/profile_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'profile':
            component = <ProfileNavBarContainer />;
            return (
                <div className='modal-navprofile'>
                    { component }
                </div>
            )
            break;
        default:
            return null;
        }
        
        return (
            <div className='modal-background' onClick={closeModal}> 
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                    { component }
                </div>
            </div>
        )
}


const msp = state => {
    return {
        modal: state.ui.modal,
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp,mdp)(Modal);