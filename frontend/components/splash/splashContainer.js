import { connect } from 'react-redux';
import { login } from '../../actions/session_action';
import { requestProducts } from '../../actions/products_action';

import Splash from './splash';

const msp = state => {
    return {
        products: state.entities.products,
        errors: state.errors.session
    }
}

const mdp = dispatch => {
    return {
        login: formUser => dispatch(login(formUser)),
        requestProducts: (data) => dispatch(requestProducts(data))
    }
}
export default connect(msp, mdp)(Splash);