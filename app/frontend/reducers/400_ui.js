import { combineReducers } from 'redux';
import modalReducer from './401_modal';

export default combineReducers({
    modal: modalReducer
})