import {
    SweetAlertBasic
} from '../utils/sweet_alert';
import {
    initLogin,
    loginError,
    loginSuccess
} from './login_function';

export function login_init() {
    return async( dispatch ) =>{
        try{
            dispatch( initLogin() )
        }catch(error){
            dispatch( loginError(error))
            SweetAlertBasic("error","Ups",`Upps, hubo un error: ${error}`)
        }
    }
}

export function login_success( { token }){
    return async( dispatch ) =>{
        dispatch( initLogin() )
        try {
            dispatch( loginSuccess({token}));
        } catch (error) {
            dispatch( loginError(error))
            SweetAlertBasic("error","Ups",`Upps, hubo un error: ${error}`)
        }
    }
}