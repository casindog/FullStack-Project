import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import { closeModal } from '../../actions/modal_action';
import Products from './products';

const mdp = dispatch => ({
    // logout: () => dispatch(logout())
    closeModal: () => dispatch(closeModal())

})

export default connect(null, mdp)(Products);