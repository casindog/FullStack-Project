import { connect } from 'react-redux';
import { createNewUser, login } from '../../../actions/session_action';
import UserAuth from './userAuth';

const msp = state => {
    return {
        products: state.entities.products,
        errors: state.errors.session
    }
}

const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    createNewUser: formUser => dispatch(createNewUser(formUser)),
})

export default connect(msp, mdp)(UserAuth);