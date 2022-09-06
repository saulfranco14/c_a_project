import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_INPUT
} from '../types/login';

const initial_state = {
    data_input: [],
    name_login: {},
    password_login: {},
    error: false,
    data_error: '',
    loading: false,
    flag: false,
    login_success: false,
    token: '',
}

export default function init ( state = initial_state, action){
    switch( action.type ){
        case LOGIN_INIT:
            return{
                ...state,
                loading: true,
                flag: true
            }
        case LOGIN_ERROR:
            return{
                ...state,
                loading: false,
                flag: false,
                error: true,
                data_error: action.payload
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                flag: false,
                error: false,
                token: action.token,
                login_success: true,
            }
        case LOGIN_INPUT:
            return{
                ...state,
                loading: false,
                flag: false,
                error: false,
                [action.name_input]: action.value_input,
            }
        default:
            return state;
    }
}