import { connect } from 'react-redux';
import { requestProducts } from '../../actions/products_action';
import Index from './index';


const msp = state => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mdp = dispatch => ({
    requestProducts: (data) => dispatch(requestProducts(data))
})

export default connect(msp, mdp)(Index);