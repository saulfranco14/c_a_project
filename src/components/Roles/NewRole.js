import React                        from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate }    from 'react-router-dom';
import { role_create }              from '../../actions/role_action';
import { SweetAlertBasic }          from '../../utils/sweet_alert';
import { WrapperNewRole }           from './roles.styles';
import { input_data }               from '../../actions/input_action';
import TextField                    from '@mui/material/TextField';
import Box                          from '@mui/material/Box';
import Button                       from '@mui/material/Button';
import FormGroup                    from '@mui/material/FormGroup';
import FormControlLabel             from '@mui/material/FormControlLabel';
import Checkbox                     from '@mui/material/Checkbox';

const NewRole = () => {

    const navigate                          = useNavigate();
    const dispatch                          = useDispatch();
    const add_input                         = (name_input, value_input) => dispatch( input_data({name_input, value_input}) );
    const create                            = (role)  => dispatch( role_create(role) );
    const {
        name_role,
        description_rol,
        url_rol,
        menu_rol

    }    = useSelector( state => state?.input || {})

    const { reload, loading } = useSelector( state => state?.role || {})

    const BackSite = () =>{ navigate('/roles') }

    const onInput = async (e) =>{
        await add_input(e.target.name,e.target.value);
    }

    const createRole = e => {

        e.preventDefault();
        const object_role = {
            name_role,
            description_rol,
            url_rol,
            menu_rol
        }

        const validate_form = Object.values(object_role)

        if(validate_form.includes(undefined)){
            SweetAlertBasic("error","Ups","Todos los datos son obligatorios");
            return;
        }

        create(object_role);
    }


    return (
        <WrapperNewRole>
            <section className='first-section'>
                <h3>Nuevo Role</h3>
                <Button variant="contained" onClick={()=>BackSite()}>
                    {`<`} Regresar
                </Button>
            </section>
            <section>
                <Box
                    component="form"
                    className='box-form'
                    noValidate
                    autoComplete="off"
                    onSubmit={createRole}
                >
                    <TextField
                        id          ='outlined-basic'
                        label       ='Ingrese el nombre del rol'
                        name        ='name_rol'
                        variant     ='outlined'
                        className   ='input-form-role'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                    />
                    <TextField
                        id          ='outlined-basic'
                        label       ='Ingrese el nombre del rol'
                        name        ='name_rol'
                        variant     ='outlined'
                        className   ='input-form-role'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                    />
                    <TextField
                        id          ='outlined-basic'
                        label       ='Ingrese la descripcion del rol'
                        name        ='description_rol'
                        variant     ='outlined'
                        className   ='input-form-role'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                    />
                    <TextField
                        id          ='outlined-basic'
                        label       ='Ingrese la url del rol'
                        name        ='url_rol'
                        variant     ='outlined'
                        className   ='input-form-role'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                    />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Perfil" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Usuario" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Roles" />
                    </FormGroup>
                    <Button
                        type="submit"
                        variant="contained"
                        className='button-form-role'
                        disabled = {loading}
                    >
                        { loading ? 'Enviando....' : 'Crear Role' }
                    </Button>
                </Box>
            </section>
            { reload && <Navigate to='/roles'/> }
        </WrapperNewRole>
    );
}
export default NewRole;