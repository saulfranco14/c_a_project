import client_axios         from '../config/axios';
import { SweetAlertBasic }  from '../utils/sweet_alert';
import {
    userInit,
    userLoadInit,
    createUserSuccess,
    userCreateError,
    userError,
    userIdSuccess,
    userLoadsSuccess,
    userLoadsError,
    userUpdateInit,
    userUpdateSuccess,
    userDeleteSuccess,
    userDeleteError
}        from './user_function';

export  function user_init(){
    return async( dispatch ) =>{
        try{
            dispatch(userInit())
        }catch(error){
            SweetAlertBasic("error","Ups",`Upps, hubo un error: ${error}`)
        }
    }
}
export  function user_create(user){
    return async( dispatch ) =>{
        dispatch( userInit() )
        try{
            await client_axios.post('/user/create/', user)
            dispatch(createUserSuccess(user));
        }catch(error){
            dispatch( userCreateError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error: ${error}`)
        }
    }
}

export  function user_alls(){
    return async( dispatch ) =>{
        dispatch( userLoadInit() )
        try{
            const response = await client_axios.post('/users')
            console.log("***** RESPONSE USERS ******");
            console.log(response);
            console.log("***** RESPONSE USERS ******");
            dispatch(userLoadsSuccess(response.data));
        }catch(error){
            dispatch( userLoadsError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al cargar los usuarios: ${error}`)
        }
    }
}

export  function user_id( id_user ){
    return async( dispatch ) =>{
        dispatch( userInit() )
        try{
            const response = await client_axios.post(`/user/${id_user}/`)
            console.log("***** RESPONSE USER ID ******");
            console.log(response);
            console.log("***** RESPONSE USER ID ******");
            dispatch(userIdSuccess(response.data));
        }catch(error){
            dispatch( userError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al carga el usuario: ${error}`)
        }
    }
}

export  function user_update( user ){
    return async( dispatch ) =>{
        dispatch( userUpdateInit() )
        try{
            const response = await client_axios.put(`/user/update/${user.id_user}/`, user)
            console.log("***** RESPONSE USER UPDATE ******");
            console.log(response);
            console.log("***** RESPONSE USER UPDATE ******");
            dispatch(userUpdateSuccess(response.data));
        }catch(error){
            dispatch( userError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al actualizar el usuario: ${error}`)
        }
    }
}

export  function user_delete( id_user ){
    return async( dispatch ) =>{
        dispatch( userInit() )
        try{
            const response = await client_axios.delete(`/user/delete/${id_user}/`)
            console.log("***** RESPONSE USER DELETE ******");
            console.log(response);
            console.log("***** RESPONSE USER DELETE ******");
            dispatch(userDeleteSuccess(response.data));
        }catch(error){
            dispatch( userDeleteError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al eliminar el usuario: ${error}`)
        }
    }
}