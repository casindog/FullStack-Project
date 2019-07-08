
import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session_action';
import Signup from './signup';

const msp = ({ errors }) => {
    return {
        errors: errors.session
    }
}

const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    createNewUser: formUser => dispatch(createNewUser(formUser))
})

export default connect(msp, mdp)(Signup);