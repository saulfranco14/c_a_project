import {
    INPUT_DATA
} from '../types/input';

const initial_state = {
    data_input:[],
    loading: false,
    flag: false
}

export default function init ( state = initial_state, action){
    switch( action.type ){
        case INPUT_DATA:
            return{
                ...state,
                loading: false,
                flag: false,
                error: false,
                [action.name_input]: action.value_input,
            }
        default:
            return state;
    }
}