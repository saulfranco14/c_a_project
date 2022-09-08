import {
    INPUT_DATA,
    INPUT_INIT,
    REMOVE_CHECK,
    ADD_CHECK
} from '../types/input';

export const inputData = ( { name_input, value_input } ) => ({
    type: INPUT_DATA,
    name_input,
    value_input
})

export const removeCheckSuccess = ( input ) => ({
    type: REMOVE_CHECK,
    payload: input
})

export const addCheckSuccess = ( input ) => ({
    type: ADD_CHECK,
    payload: input
})


export const inputInit = ( ) => ( { type: INPUT_INIT })