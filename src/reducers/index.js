import {combineReducers} from 'redux';
import loginReducer from './login_reducer';
import inputReducer from './input_reducer';
import userReducer  from './user_reducer';
import roleReducer  from './role_reducer';


const rootReducer = combineReducers({
    login: loginReducer,
    input: inputReducer,
    user: userReducer,
    role : roleReducer
});

export default rootReducer;