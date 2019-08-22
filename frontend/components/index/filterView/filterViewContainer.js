import { connect } from 'react-redux';
import { requestProducts, changeFilterView } from '../../../actions/products_action';
import FilterView from './filterView';

const msp = state => {
    return {
        products: state.entities.products,
        filterView: state.entities.filterView,
        viewedProducts: state.entities.viewedProducts
    };
};

const mdp = dispatch => ({
    requestProducts: data => dispatch(requestProducts(data)),
    changeFilterView: view => dispatch(changeFilterView(view))
})

export default connect(msp, mdp)(FilterView);