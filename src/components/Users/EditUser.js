import React, { useEffect }                     from 'react';
import Button                                   from '@mui/material/Button';
import Box                                      from '@mui/material/Box';
import { useNavigate,Navigate,useParams }       from 'react-router-dom';
import { useDispatch, useSelector }             from 'react-redux';
import { WrapperNewUser,InputData }             from './users.styles';
import { user_id,user_update }                  from '../../actions/user_action';
import { input_data }                           from '../../actions/input_action';

const EditUser = () => {

    const { id_user }                   = useParams();
    const dispatch                      = useDispatch();
    const navigate                      = useNavigate();
    const loading_user                  = () => dispatch( user_id(id_user) );
    const update                        = (user)  => dispatch( user_update(user) );
    const add_input                     = (name_input, value_input) => dispatch( input_data({name_input, value_input}) );
    const { edit_user,reload, loading } = useSelector( state => state?.user || {})
    const {
        name_user,
        first_name_user,
        last_name_user,
        email_user,
        password_user

    }    = useSelector( state => state?.input || {})

    useEffect( () => {
        loading_user();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const BackSite = () =>{ navigate('/users') }

    const updateUser = (e) =>{
        e.preventDefault();
        const object_user = {
            name_user,
            first_name_user,
            last_name_user,
            email_user,
            password_user,
        }

        // Quita los valores vacios ""
        const data_user = Object.entries(object_user).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {});
        update({...data_user,id_user:id_user});
    }

    const onInput = async (e) =>{
        await add_input(e.target.name,e.target.value);
    }

    return (
        <WrapperNewUser>
            <section className='first-section'>
                <h3>Editar Usuario</h3>
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
                    onSubmit={updateUser}
                >
                    <InputData
                        id          ='outlined-basic'
                        placeholder ='Ingresa tu nombre'
                        name        ='name_user'
                        className   ='input-form-user'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_user?.name_user }
                    />
                    <InputData
                        placeholder ='Ingresa tu apellido paterno'
                        name        ='first_name_user'
                        className   ='input-form-user'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_user?.first_name_user }
                    />
                    <InputData
                        placeholder ='Ingresa tu apellido materno'
                        name        ='last_name_user'
                        className   ='input-form-user'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_user?.last_name_user }
                    />
                    <InputData
                        placeholder ='Ingresa tu télefono celular'
                        name        ='phone_user'
                        className   ='input-form-user'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_user?.phone_user }
                    />
                    <InputData
                        placeholder ='Ingresa tu correo eléctronico'
                        name        ='email_user'
                        className   ='input-form-user'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_user?.email_user }
                    />
                    <InputData
                        placeholder ='Ingresa tu password'
                        name        ='password_user'
                        className   ='input-form-user'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_user?.password_user }
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className='button-form-user'
                        disabled = {loading}
                    >
                        { loading ? 'Enviando....' : 'Actualizar Usuario' }
                    </Button>
                </Box>
            </section>
            { reload && <Navigate to='/users'/> }
        </WrapperNewUser>
    );
}

export default EditUser;