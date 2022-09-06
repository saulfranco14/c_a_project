import loginReducer from './login_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;