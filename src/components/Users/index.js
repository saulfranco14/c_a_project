import React            from 'react';
import { useNavigate }  from 'react-router-dom';
import { WrapperUser }  from './users.styles';
import { DataGrid }     from '@mui/x-data-grid';
import Button           from '@mui/material/Button';
import {ColumnsUser}    from '../../utils/row_data';


export const data_user = [
    {
        id_user: "6317f5996c00e9cc1fd0834a",
        name_user: "Saul Mauricio",
        first_name_user: "Franco",
        last_name_user: "Rentería",
        email_user: "fars_9301@hotmail.com",
        id_rol: 1,
        password_user: null,
        active_user: true
    }
]

const Index = () => {

    const navigate          = useNavigate();

    const  newUser = () => {
        navigate('/new_user');
    }

    return (
        <WrapperUser>
            <section className='first-section'>
                <h1 className='text-title'>Usuarios</h1>
                <Button
                    variant="contained"
                    className='button-create'
                    onClick={newUser}
                    size="small"
                >
                    Crear Usuario
                </Button>
            </section>
            <section className='grid-user'>
                <DataGrid
                    rows                ={data_user}
                    columns             ={ColumnsUser}
                    pageSize            ={12}
                    rowsPerPageOptions  ={[12]}
                    getRowId            ={data_user => data_user.id_user}
                />
            </section>
        </WrapperUser>
    );
}

export default Index;