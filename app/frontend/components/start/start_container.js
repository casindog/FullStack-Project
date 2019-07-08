import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import { openModal } from '../../actions/modal_action';
import Start from './start';

const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(null, mdp)(Start);