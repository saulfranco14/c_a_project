import {
    USER_INIT,
    USER_SUCCESS,
    USER_ERROR,
    USER_LOAD_INIT,
    USER_LOAD_ERROR,
    USER_LOAD_SUCCESS,
    USER_UPDATE_INIT,
    USER_UPDATE_ERROR,
    USER_UPDATE_SUCCESS,
    USER_DELETE_INIT,
    USER_DELETE_ERROR,
    USER_DELETE_SUCCESS,
    USER_ID_SUCCESS
} from '../types/user';

export const userInit       = (  ) => ( { type: USER_INIT } )
export const userLoadInit   = (  ) => ( { type: USER_LOAD_INIT } )
export const userUpdateInit = (  ) => ( { type: USER_UPDATE_INIT } )
export const userDeleteInit = (  ) => ( { type: USER_DELETE_INIT } )

export const userError = ( error ) => ({
    type:USER_ERROR,
    data_error: error
})

export const userCreateError = ( error ) => ({
    type:USER_ERROR,
    data_error: error
})


export const createUserSuccess = ( user ) =>({
    type: USER_SUCCESS,
    payload: user
})

export const userLoadSuccess = ( users ) =>({
    type: USER_LOAD_SUCCESS,
    payload: users
})

export const userLoadsError = ( error ) => ({
    type:USER_LOAD_ERROR,
    data_error: error
})


export const userIdSuccess = ( user ) =>({
    type: USER_ID_SUCCESS,
    payload: user
})


export const userUpdateSuccess = ( user ) =>({
    type: USER_UPDATE_SUCCESS,
    payload: user
})

export const userUpdateError = ( error ) => ({
    type:USER_UPDATE_ERROR,
    data_error: error
})

export const userDeleteSuccess = ( user ) =>({
    type: USER_DELETE_SUCCESS,
    payload: user
})

export const userDeleteError = ( error ) => ({
    type:USER_DELETE_ERROR,
    data_error: error
})

