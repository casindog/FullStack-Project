import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Products from './products';
import { requestProduct, viewedProducts } from '../../../actions/products_action';
import { fetchReviews } from '../../../actions/reviews_action';


const msp = state => {
    return {
        products: state.entities.products,
        filterView: state.entities.filterView,
        cartItems: state.entities.cartItems
    }
}

const mdp = dispatch => {
    return {
        getProduct: id => dispatch(requestProduct(id)),
        viewedProducts: id => dispatch(viewedProducts(id)),
        fetchReviews: id => dispatch(fetchReviews(id))

    }
}

export default withRouter(connect(msp, mdp)(Products));