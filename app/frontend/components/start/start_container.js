import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import Start from './start';

const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser))
})

export default connect(null, mdp)(Start);