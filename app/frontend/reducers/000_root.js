import {combineReducers} from 'redux';
import sessionReducer from './100_session';
import entitiesReducer from './200_entities';
import errorsReducer from './300_errors';

export default combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer
})