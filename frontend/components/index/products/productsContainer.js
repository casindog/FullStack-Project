import { connect } from 'react-redux';
import Products from './products';
import { openModal, closeModal } from '../../../actions/modal_action';

const msp = state => {
    return {
        products: state.entities.products,
        filterView: state.entities.filterView
    }
}

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Products);