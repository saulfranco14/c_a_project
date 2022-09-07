import React                        from 'react';
import { useDispatch }              from 'react-redux'
import TextField                    from '@mui/material/TextField';
import { input_data }               from '../../actions/input_action';

const Inputs = ( props ) => {

    const dispatch          = useDispatch();
    const add_input         = (name_input, value_input) => dispatch( input_data({name_input, value_input}) );

    const onInput = async (e) =>{
        await add_input(e.target.name,e.target.value);
    }

    const {
        style_input,
        placeholder_input,
        name_input,
        variant_input,
        class_name_input,
        type_input
    } = props.dataLogin;

    return (
        <>
            <TextField
                id          ={style_input}
                label       ={placeholder_input}
                name        ={name_input}
                variant     ={variant_input}
                className   ={class_name_input}
                type        ={type_input}
                autoComplete="off"
                onChange    ={ e => onInput(e) }
            />
        </>
    );
}

export default Inputs;