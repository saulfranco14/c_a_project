import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../types/login';

export const initLogin = () => ({
    type: LOGIN_INIT,
})

export const loginError = ( { error } ) => ({
    type:LOGIN_ERROR,
    data_error: error
})

export const loginSuccess = ( { token } ) =>({
    type: LOGIN_SUCCESS,
    token
})