import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_action';
import { requestProducts } from '../../../actions/products_action';
import Products from './products';

// kc: don't shuffle the index page
// Array.prototype.shuffle = function () {
//     var input = this;

//     for (var i = input.length - 1; i >= 0; i--) {

//         var randomIndex = Math.floor(Math.random() * (i + 1));
//         var itemAtIndex = input[randomIndex];

//         input[randomIndex] = input[i];
//         input[i] = itemAtIndex;
//     }
//     return input;
// }


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