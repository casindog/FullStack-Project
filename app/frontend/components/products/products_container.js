import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import { requestProducts } from '../../actions/products_action';
import Products from './products';


const msp = state => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mdp = dispatch => ({
    // logout: () => dispatch(logout())
    closeModal: () => dispatch(closeModal()),
    requestProducts: () => dispatch(requestProducts())

})

export default connect(msp, mdp)(Products);