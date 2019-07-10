import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../actions/modal_action';
import ProfileNavBarContainer from '../navbar/profile_container';

function ProfileModal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    switch (modal) {
        case 'profile':
            return (
                <div>                    
                    <div className='modal-navprofile' onClick={(e) => e.stopPropagation()}>
                        <ProfileNavBarContainer />
                    </div>
                    <div className='modal-profile-background' onClick={closeModal} />
                </div>
                
            )
            break;
        default:
            return null;
    }
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
        closeModal: (e) => {
            e.stopPropagation();
            dispatch(closeModal());
        }
    }
}

export default connect(msp, mdp)(ProfileModal);