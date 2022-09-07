import React, {useState}    from 'react';
import Input                from '../Inputs/Input';
import { useNavigate }      from 'react-router-dom';
import Box                  from '@mui/material/Box';
import Button               from '@mui/material/Button';
import { WrapperNewUser }   from './users.styles';
import { UserInput }        from './UserInput';



const NewUser = () => {

    const [ newInput, setNewInput ]         = useState(UserInput);
    const navigate                          = useNavigate();

    const createUser = e => {
        e.preventDefault();
    }

    const BackSite = () =>{
        navigate('/users');
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
                    >
                        Crear Usuario
                    </Button>
                </Box>
            </section>
        </WrapperNewUser>
    );
}
export default NewUser;