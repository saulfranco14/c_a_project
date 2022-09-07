import {combineReducers} from 'redux';
import loginReducer from './login_reducer';
import inputReducer from './input_reducer';


const rootReducer = combineReducers({
    login: loginReducer,
    input: inputReducer
});

export default rootReducer;