import {
    ROLE_INIT,
    ROLE_SUCCESS,
    ROLE_ERROR,
    ROLE_LOAD_INIT,
    ROLE_LOAD_ERROR,
    ROLE_LOAD_SUCCESS,
    ROLE_UPDATE_INIT,
    ROLE_UPDATE_ERROR,
    ROLE_UPDATE_SUCCESS,
    ROLE_DELETE_INIT,
    ROLE_DELETE_ERROR,
    ROLE_DELETE_SUCCESS,
    ROLE_ID_SUCCESS,
    ROLE_INIT_CHANGE
} from '../types/role';

export const roleInit       = ()  => ( { type: ROLE_INIT } )
export const roleLoadInit   = ()  => ( { type: ROLE_LOAD_INIT } )
export const roleUpdateInit = ()  => ( { type: ROLE_UPDATE_INIT } )
export const roleDeleteInit = ()  => ( { type: ROLE_DELETE_INIT } )
export const roleChange     = ()  => ( { type:ROLE_INIT_CHANGE } )


export const roleError = ( error ) => ({
    type:ROLE_ERROR,
    data_error: error
})

export const roleCreateError = ( error ) => ({
    type:ROLE_ERROR,
    data_error: error
})


export const createRoleSuccess = ( role ) =>({
    type: ROLE_SUCCESS,
    payload: role
})

export const roleLoadsSuccess = ( roles ) =>({
    type: ROLE_LOAD_SUCCESS,
    payload: roles
})

export const roleLoadsError = ( error ) => ({
    type:ROLE_LOAD_ERROR,
    data_error: error
})


export const roleIdSuccess = ( role ) =>({
    type: ROLE_ID_SUCCESS,
    payload: role
})


export const roleUpdateSuccess = ( role ) =>({
    type: ROLE_UPDATE_SUCCESS,
    payload: role
})

export const roleUpdateError = ( error ) => ({
    type:ROLE_UPDATE_ERROR,
    data_error: error
})

export const roleDeleteSuccess = ( role ) =>({
    type: ROLE_DELETE_SUCCESS,
    payload: role
})

export const roleDeleteError = ( error ) => ({
    type:ROLE_DELETE_ERROR,
    data_error: error
})

