import {
    INPUT_DATA,
    INPUT_INIT,
    REMOVE_CHECK,
    ADD_CHECK
} from '../types/input';

const initial_state = {
    data_input:[],
    menu_rol: [],
    loading: false,
    flag: false
}

export default function init ( state = initial_state, action){
    switch( action.type ){
        case INPUT_INIT:
            return{
                data_input:[],
                loading: false,
                flag: false
            }
        case INPUT_DATA:
            return{
                ...state,
                loading: false,
                flag: false,
                error: false,
                menu_rol: [...state.menu_rol],
                [action.name_input]: action.value_input,
            }
        case ADD_CHECK:
            return{
                ...state,
                loading: false,
                menu_rol: [...state.menu_rol,action.payload],
            }
        case REMOVE_CHECK:
            return{
                ...state,
                loading: false,
                menu_rol: state.menu_rol.filter(item => item !== action.payload),
            }
        default:
            return state;
    }
}