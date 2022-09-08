import React, {useEffect}           from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate }              from 'react-router-dom';
import { WrapperRol }              from './roles.styles';
import { DataGrid }                 from '@mui/x-data-grid';
import Button                       from '@mui/material/Button';
import {ColumnsRole}                from '../../utils/row_data';
import {
    role_alls,
    role_init
}   from '../../actions/role_action';
import{
    input_init
} from '../../actions/input_action';

const Index = () => {

    const navigate          = useNavigate();
    const dispatch          = useDispatch();
    const loading_roles     = () => dispatch( role_alls() );
    const init              = () => dispatch( role_init() );
    const init_input        = () => dispatch( input_init() );

    const  newRol =  () => {
        init();
        init_input();
        navigate('/new_role');
    }

    useEffect( () => {
        loading_roles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const { roles } = useSelector( state => state?.role);

    return (
        <WrapperRol>
            <section className='first-section'>
                <h1 className='text-title'>Roles</h1>
                <Button
                    variant="contained"
                    className='button-create'
                    onClick={()=> newRol()}
                    size="small"
                >
                    Crear Rol
                </Button>
            </section>
            <section className='grid-role'>
                <DataGrid
                    id={Math.random()}
                    rows                ={roles}
                    columns             ={ColumnsRole}
                    pageSize            ={12}
                    rowsPerPageOptions  ={[12]}
                    getRowId            ={roles => roles.id_rol}
                />
            </section>
        </WrapperRol>
    );
}

export default Index;