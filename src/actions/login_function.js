import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_INPUT
} from '../types/login';

export const initLogin = () => ({
    type: LOGIN_INIT,
})

export const loginInput = ( { name_input, value_input } ) => ({
    type: LOGIN_INPUT,
    name_input,
    value_input
})

export const loginError = ( { error } ) => ({
    type:LOGIN_ERROR,
    data_error: error
})

export const loginSuccess = ( { token } ) =>({
    type: LOGIN_SUCCESS,
    token
})