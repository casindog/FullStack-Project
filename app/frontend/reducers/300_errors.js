import { combineReducers } from 'redux';
import sessionErrorsReducer from './301_sessionErrors';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
})

export default errorsReducer;