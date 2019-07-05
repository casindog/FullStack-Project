import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Products from './products';

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mdp)(Products);