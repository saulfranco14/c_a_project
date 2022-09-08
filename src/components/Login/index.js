import React, {useState}    from 'react';
import Box                  from '@mui/material/Box';
import Button               from '@mui/material/Button';
import { SweetAlertBasic }  from '../../utils/sweet_alert';
import { WrapperLogin }     from './login.styles';
import { DataLogin }        from './data_login';
import Input                from '../Inputs/Input';
import { useSelector }      from 'react-redux'

const Index = () => {

    // SET ADMIN
    let user_data = {
        rol: 'admin'
    }

    localStorage.setItem('user', JSON.stringify(user_data));

    const [ newInput, setNewInput ]         = useState(DataLogin)
    const { name_login, password_login }    = useSelector( state => state?.input || {})

    const loginUserForm = e => {
        e.preventDefault();
        if(name_login.trim() === '' || password_login.trim() === '' ){
            SweetAlertBasic("error","Ups","Todos los datos son obligatorios");
            return;
        }
    }

    return (
        <>
            <WrapperLogin>
                <section className='row-section'>
                    <section className='text-login'>
                        Bienvenidos
                    </section>
                    <section className='input-login'>
                        <Box
                            component="form"
                            className='box-form'
                            noValidate
                            autoComplete="off"
                            onSubmit={loginUserForm}
                        >
                            {
                                DataLogin.map( (data, index) =>(
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
                                className='button-form-login'
                            >
                                Iniciar Sesión
                            </Button>
                        </Box>
                    </section>
                </section>
            </WrapperLogin>
        </>
    );
}

export default Index;