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

const initial_state = {
    roles:[],
    loading: false,
    flag: false,
    reload: false,
    errror: false,
    data_error: null,
    create_role: null,
    edit_role : null,
    delete_role: null
}

export default function init ( state = initial_state, action){
    switch( action.type ){
        case ROLE_INIT:
        case ROLE_LOAD_INIT:
        case ROLE_UPDATE_INIT:
        case ROLE_DELETE_INIT:
            return{
                ...state,
                loading: false,
                flag: false,
                reload: false,
                create_role: null,
                edit_role : null,
                delete_role: null
            }
        case ROLE_ERROR:
        case ROLE_LOAD_ERROR:
        case ROLE_UPDATE_ERROR:
        case ROLE_DELETE_ERROR:
            return{
                ...state,
                loading: false,
                flag: false,
                error: true,
                data_error: action.payload
            }

        case ROLE_INIT_CHANGE :
            return{
                ...state,
                loading: true,
                flag: true,
                reload: false,
            }
        case ROLE_SUCCESS:
            return{
                ...state,
                loading: false,
                flag: false,
                reload: true,
                create_role: action.payload,
            }
        case ROLE_LOAD_SUCCESS:
            return{
                ...state,
                roles: action.payload,
                loading: false,
                flag: false
            }
        case ROLE_UPDATE_SUCCESS:
            return{
                ...state,
                roles: [ ...state.roles],
                loading: false,
                flag: false,
                edit_role: action.payload,
                reload: true,
            }
        case ROLE_DELETE_SUCCESS:
            return{
                ...state,
                roles: [ ...state.roles],
                loading: false,
                flag: false,
                delete_role: action.payload,
            }
        case ROLE_ID_SUCCESS:
            return{
                ...state,
                loading: false,
                flag: false,
                edit_role: action.payload,
            }
        default:
            return state;
    }
}