import {combineReducers} from 'redux';
import loginReducer from './login_reducer';
import inputReducer from './input_reducer';
import userReducer from './user_reducer';


const rootReducer = combineReducers({
    login: loginReducer,
    input: inputReducer,
    user: userReducer
});

export default rootReducer;