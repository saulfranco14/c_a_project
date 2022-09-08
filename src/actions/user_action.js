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
    userDeleteError,
    userChange
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
        dispatch( userChange() )
        try{
            await client_axios.post('/user/create/', user)
            dispatch(createUserSuccess(user));
            SweetAlertBasic("success","Felicidades!","Se ha registrado correctamente el usuario");
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
            const response = await client_axios.get('/user/');
            dispatch(userLoadsSuccess(response.data.data[0]));
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
            const response = await client_axios.get(`/user/${id_user}/`)
            dispatch(userIdSuccess(response.data.data[0]));
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
            const response = await client_axios.put(`/user/${user.id_user}/`, user)
            if( response.data.code === 200 ){
                SweetAlertBasic("success","Bien!","Se ha actualizado el usuario correctamente.");
                dispatch(userUpdateSuccess(response.data));
            }
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
            const response = await client_axios.delete(`/user/${id_user}/`)
            if( response.data.code === 200 ){
                SweetAlertBasic("success","Bien!","Se ha eliminado el usuario correctamente.");
                dispatch(userDeleteSuccess(response.data));
                dispatch( user_alls() );
            }
        }catch(error){
            dispatch( userDeleteError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al eliminar el usuario: ${error}`)
        }
    }
}