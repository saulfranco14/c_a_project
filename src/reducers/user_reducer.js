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
    USER_ID_SUCCESS,
    USER_INIT_CHANGE
} from '../types/user';

const initial_state = {
    users:[],
    loading: false,
    flag: false,
    reload: false,
    errror: false,
    data_error: null,
    create_user: null,
    edit_user : null,
    delete_user: null
}

export default function init ( state = initial_state, action){
    switch( action.type ){
        case USER_INIT:
        case USER_LOAD_INIT:
        case USER_UPDATE_INIT:
        case USER_DELETE_INIT:
            return{
                ...state,
                loading: false,
                flag: false,
                reload: false,
                create_user: null,
                edit_user : null,
                delete_user: null
            }
        case USER_ERROR:
        case USER_LOAD_ERROR:
        case USER_UPDATE_ERROR:
        case USER_DELETE_ERROR:
            return{
                ...state,
                loading: false,
                flag: false,
                error: true,
                data_error: action.payload
            }

        case USER_INIT_CHANGE :
            return{
                ...state,
                loading: true,
                flag: true,
                reload: false,
            }
        case USER_SUCCESS:
            return{
                ...state,
                loading: false,
                flag: false,
                reload: true,
                create_user: action.payload,
            }
        case USER_LOAD_SUCCESS:
            return{
                ...state,
                users: action.payload,
                loading: false,
                flag: false
            }
        case USER_UPDATE_SUCCESS:
            return{
                ...state,
                users: [ ...state.users],
                loading: false,
                flag: false,
                edit_user: action.payload,
                reload: true,
            }
        case USER_DELETE_SUCCESS:
            return{
                ...state,
                users: [ ...state.users],
                loading: false,
                flag: false,
                delete_user: action.payload,
            }
        case USER_ID_SUCCESS:
            return{
                ...state,
                loading: false,
                flag: false,
                edit_user: action.payload,
            }
        default:
            return state;
    }
}