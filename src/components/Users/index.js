import React, {useEffect}           from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate }              from 'react-router-dom';
import { WrapperUser }              from './users.styles';
import { DataGrid }                 from '@mui/x-data-grid';
import Button                       from '@mui/material/Button';
import {ColumnsUser}                from '../../utils/row_data';
import {
    user_alls,
    user_init
}   from '../../actions/user_action';

const Index = () => {

    const navigate          = useNavigate();
    const dispatch          = useDispatch();
    const loading_users     = () => dispatch( user_alls() );
    const init              = () => dispatch( user_init() );

    const  newUser =  () => {
        init();
        navigate('/new_user');
    }

    useEffect( () => {
        loading_users();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const { users } = useSelector( state => state?.user);

    return (
        <WrapperUser>
            <section className='first-section'>
                <h1 className='text-title'>Usuarios</h1>
                <Button
                    variant="contained"
                    className='button-create'
                    onClick={()=> newUser()}
                    size="small"
                >
                    Crear Usuario
                </Button>
            </section>
            <section className='grid-user'>
                <DataGrid
                    id={Math.random()}
                    rows                ={users}
                    columns             ={ColumnsUser}
                    pageSize            ={12}
                    rowsPerPageOptions  ={[12]}
                    getRowId            ={users => parseInt(users.id_user)}
                />
            </section>
        </WrapperUser>
    );
}

export default Index;