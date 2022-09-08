import React, {useState}            from 'react';
import { useDispatch }              from 'react-redux';
import { useNavigate, Navigate }    from 'react-router-dom';
import { user_create }              from '../../actions/user_action';
import { SweetAlertBasic }          from '../../utils/sweet_alert';
import { WrapperNewUser }           from './users.styles';
import { UserInput }                from './UserInput';
import { useSelector }              from 'react-redux';
import Box                          from '@mui/material/Box';
import Button                       from '@mui/material/Button';
import Input                        from '../Inputs/Input';


const NewUser = () => {

    const [ newInput, setNewInput ]         = useState(UserInput);
    const navigate                          = useNavigate();
    const dispatch                          = useDispatch();
    const create                            = (user)  => dispatch( user_create(user) );
    const {
        name_user,
        first_name_user,
        last_name_user,
        email_user,
        password_user

    }    = useSelector( state => state?.input || {})

    const { reload, loading } = useSelector( state => state?.user || {})

    const BackSite = () =>{ navigate('/users') }

    const createUser = e => {

        e.preventDefault();
        const object_user = {
            name_user,
            first_name_user,
            last_name_user,
            email_user,
            password_user,
            id_rol : 1,
            active_user: true
        }
        const validate_form = Object.values(object_user)

        if(validate_form.includes(undefined)){
            SweetAlertBasic("error","Ups","Todos los datos son obligatorios");
            return;
        }

        create(object_user);
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