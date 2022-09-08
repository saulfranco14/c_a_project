import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate }    from 'react-router-dom';
import { user_create }              from '../../actions/user_action';
import { role_alls }                from '../../actions/role_action';
import { input_data }               from '../../actions/input_action';
import { SweetAlertBasic }          from '../../utils/sweet_alert';
import { WrapperNewUser }           from './users.styles';
import { UserInput }                from './UserInput';
import Input                        from '../Inputs/Input';
import Box                          from '@mui/material/Box';
import Button                       from '@mui/material/Button';
import InputLabel                   from '@mui/material/InputLabel';
import MenuItem                     from '@mui/material/MenuItem';
import Select                       from '@mui/material/Select';
import FormControl                  from '@mui/material/FormControl';



const NewUser = () => {

    useEffect( () => {
        loading_roles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const [ newInput, setNewInput ]         = useState(UserInput);
    const navigate                          = useNavigate();
    const dispatch                          = useDispatch();
    const loading_roles                     = () => dispatch( role_alls() );
    const create                            = (user)  => dispatch( user_create(user) );
    const add_input                         = (name_input, value_input) => dispatch( input_data({name_input, value_input}) );

    const {
        name_user,
        first_name_user,
        last_name_user,
        email_user,
        password_user,
        id_rol,
        phone_user

    }    = useSelector( state => state?.input || {})

    const { reload, loading } = useSelector( state => state?.user || {})
    const { roles } = useSelector( state => state?.role);

    const BackSite = () =>{ navigate('/users') }

    const createUser = e => {

        e.preventDefault();
        const object_user = {
            name_user,
            first_name_user,
            last_name_user,
            email_user,
            password_user,
            id_rol,
            phone_user
        }
        const validate_form = Object.values(object_user)
        if(validate_form.includes(undefined)){
            SweetAlertBasic("error","Ups","Todos los datos son obligatorios");
            return;
        }
        // Create user
        create(object_user);
    }

    const onInput = async (e) =>{
        await add_input(e.target.name,e.target.value);
    }

    return (
        <WrapperNewUser>
            <section className='first-section'>
                <h3>Nuevo Usuario</h3>
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
                    onSubmit={createUser}
                >
                    {
                        UserInput.map( (data, index) =>(
                            <div key={index}>
                                <Input
                                    dataLogin   = {data}
                                    index       = {index}
                                    newInput    = {newInput}
                                    setNewInput = {setNewInput}
                                />
                            </div>
                        ) )
                    }
                    <FormControl
                        className='input-form-user'
                    >
                        <InputLabel id="role-controlled-open-select">Rol</InputLabel>
                        <Select
                            labelId="id_rol"
                            id="role-controlled-open-select"
                            name="id_rol"
                            label="Rol"
                            onChange    ={ e => onInput(e) }
                        >
                        {roles.map((rol) => (
                            <MenuItem
                                key={rol.id_rol}
                                value={rol.name_rol}
                            >
                                {rol.name_rol}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        className='button-form-user'
                        disabled = {loading}
                    >
                        { loading ? 'Enviando....' : 'Crear Usuario' }
                    </Button>
                </Box>
            </section>
            { reload && <Navigate to='/users'/> }
        </WrapperNewUser>
    );
}
export default NewUser;