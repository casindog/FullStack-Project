import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Products from './products';
import { requestProduct } from '../../../actions/products_action';

const msp = state => {
    return {
        products: state.entities.products,
        filterView: state.entities.filterView
    }
}

const mdp = dispatch => {
    return {
        getProduct: id => dispatch(requestProduct(id))
    }
}

export default withRouter(connect(msp, mdp)(Products));