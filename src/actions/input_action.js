import { SweetAlertBasic }  from '../utils/sweet_alert';
import {
    inputData,
    inputInit
}                           from './input_function'


export  function input_data( { name_input, value_input } ){
    return async( dispatch ) =>{
        try{
            dispatch(inputData( { name_input, value_input } ))
        }catch(error){
            SweetAlertBasic("error","Ups",`Upps, hubo un error: ${error}`)
        }
    }
}

export  function input_init(){
    return async( dispatch ) =>{
        try{
            dispatch(inputInit())
        }catch(error){
            SweetAlertBasic("error","Ups",`Upps, hubo un error: ${error}`)
        }
    }
}
