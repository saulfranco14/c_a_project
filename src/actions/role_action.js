import client_axios         from '../config/axios';
import { SweetAlertBasic }  from '../utils/sweet_alert';
import {
    roleInit,
    roleLoadInit,
    createRoleSuccess,
    roleCreateError,
    roleError,
    roleIdSuccess,
    roleLoadsSuccess,
    roleLoadsError,
    roleUpdateInit,
    roleUpdateSuccess,
    roleDeleteSuccess,
    roleDeleteError,
    roleChange
}        from './role_function';

export  function role_init(){
    return async( dispatch ) =>{
        try{
            dispatch(roleInit())
        }catch(error){
            SweetAlertBasic("error","Ups",`Upps, hubo un error: ${error}`)
        }
    }
}
export  function role_create(role){
    return async( dispatch ) =>{
        dispatch( roleChange() )
        try{
            await client_axios.post('/role/create/', role)
            dispatch(createRoleSuccess(role));
            SweetAlertBasic("success","Felicidades!","Se ha registrado correctamente el role");
        }catch(error){
            dispatch( roleCreateError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error: ${error}`)
        }
    }
}

export  function role_alls(){
    return async( dispatch ) =>{
        dispatch( roleLoadInit() )
        try{
            const response = await client_axios.get('/role/');
            dispatch(roleLoadsSuccess(response.data.data[0]));
        }catch(error){
            dispatch( roleLoadsError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al cargar los roles: ${error}`)
        }
    }
}

export  function role_id( id_role ){
    return async( dispatch ) =>{
        dispatch( roleInit() )
        try{
            const response = await client_axios.get(`/role/${id_role}/`)
            dispatch(roleIdSuccess(response.data.data[0]));
        }catch(error){
            dispatch( roleError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al carga el role: ${error}`)
        }
    }
}

export  function role_update( role ){
    return async( dispatch ) =>{
        dispatch( roleUpdateInit() )
        try{
            const response = await client_axios.put(`/role/${role.id_role}/`, role)
            if( response.data.code === 200 ){
                SweetAlertBasic("success","Bien!","Se ha actualizado el role correctamente.");
                dispatch(roleUpdateSuccess(response.data));
            }
        }catch(error){
            dispatch( roleError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al actualizar el role: ${error}`)
        }
    }
}

export  function role_delete( id_role ){
    return async( dispatch ) =>{
        dispatch( roleInit() )
        try{
            const response = await client_axios.delete(`/role/${id_role}/`)
            if( response.data.code === 200 ){
                SweetAlertBasic("success","Bien!","Se ha eliminado el role correctamente.");
                dispatch(roleDeleteSuccess(response.data));
                dispatch( role_alls() );
            }
        }catch(error){
            dispatch( roleDeleteError(error) )
            SweetAlertBasic("error","Ups",`Upps, hubo un error al eliminar el role: ${error}`)
        }
    }
}