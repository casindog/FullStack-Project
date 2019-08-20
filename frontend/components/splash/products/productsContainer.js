import { connect } from 'react-redux';
import Products from './products';

const msp = state => {
    return {
        products: state.entities.products
    }
}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Products);