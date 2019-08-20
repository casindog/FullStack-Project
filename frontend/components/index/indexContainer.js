import { connect } from 'react-redux';
import { requestProducts, changeFilterView } from '../../actions/products_action';
import Index from './index';


const msp = state => {
    return {
        products: state.entities.products,
        filterView: state.entities.filterView
    }
}

const mdp = dispatch => ({
    requestProducts: data => dispatch(requestProducts(data)),
    changeFilterView: view => dispatch(changeFilterView(view))
})

export default connect(msp, mdp)(Index);