import {
    INPUT_DATA,
    INPUT_INIT
} from '../types/input';

export const inputData = ( { name_input, value_input } ) => ({
    type: INPUT_DATA,
    name_input,
    value_input
})

export const inputInit = ( ) => ( { type: INPUT_INIT })