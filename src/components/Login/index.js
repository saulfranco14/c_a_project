import React, {useState}    from 'react';
import Box                  from '@mui/material/Box';
import TextField            from '@mui/material/TextField';
import Button               from '@mui/material/Button';
import { SweetAlertBasic }  from '../../utils/sweet_alert';
import { WrapperLogin }     from './login.styles'

const Index = () => {

    const [ correo, setCorreo ]         = useState('');
    const [ password, setPaswword ]     = useState('');

    const loginUserForm = e => {
        e.preventDefault();
        //Validate form
        if( correo.trim() === '' || password.trim() === '' ){
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
                            <TextField
                                id          ="outlined-basic"
                                label       ="Ingrese su correo"
                                variant     ="outlined"
                                className   ='input-form-login'
                                value       ={correo}
                                onChange    ={ e => setCorreo(e.target.value) }
                            />
                            <TextField
                                id          ="outlined-basic"
                                label       ="Ingrese su contraseña"
                                variant     ="outlined"
                                className   ='input-form-login'
                                value       ={password}
                                type        ="password"
                                autoComplete="off"
                                onChange    ={ e => setPaswword(e.target.value) }
                            />
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