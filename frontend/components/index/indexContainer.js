import { connect } from 'react-redux';
import { requestProducts } from '../../actions/products_action';
import Index from './index';


const msp = state => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    requestProducts: () => dispatch(requestProducts())
})

export default connect(msp, mdp)(Index);