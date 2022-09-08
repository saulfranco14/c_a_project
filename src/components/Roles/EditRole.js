import React, { useEffect }                     from 'react';
import Button                                   from '@mui/material/Button';
import Box                                      from '@mui/material/Box';
import { useNavigate,Navigate,useParams }       from 'react-router-dom';
import { useDispatch, useSelector }             from 'react-redux';
import { WrapperNewRole,InputData }             from './roles.styles';
import { role_id,role_update }                  from '../../actions/role_action';
import { input_data }                           from '../../actions/input_action';

const EditRole = () => {

    const { id_role }                   = useParams();
    const dispatch                      = useDispatch();
    const navigate                      = useNavigate();
    const loading_role                  = () => dispatch( role_id(id_role) );
    const update                        = (role)  => dispatch( role_update(role) );
    const add_input                     = (name_input, value_input) => dispatch( input_data({name_input, value_input}) );
    const { edit_role,reload, loading } = useSelector( state => state?.role || {})
    const {
        name_rol,
        description_rol,
        url_rol,
        menu_rol
    }    = useSelector( state => state?.input || {})

    useEffect( () => {
        loading_role();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    const BackSite = () =>{ navigate('/roles') }

    const updateRole = (e) =>{
        e.preventDefault();
        const object_role = {
            name_rol,
            description_rol,
            url_rol,
            menu_rol
        }

        // Quita los valores vacios ""
        const data_role = Object.entries(object_role).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {});
        update({...data_role,id_role:id_role});
    }

    const onInput = async (e) =>{
        await add_input(e.target.name,e.target.value);
    }

    return (
        <WrapperNewRole>
            <section className='first-section'>
                <h3>Editar Role</h3>
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
                    onSubmit={updateRole}
                >
                    <InputData
                        id          ='outlined-basic'
                        placeholder ='Ingresa el role'
                        name        ='name_rol'
                        className   ='input-form-role'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_role?.name_rol }
                    />
                    <InputData
                        placeholder ='Ingresa la descripcion del rol'
                        name        ='description_rol'
                        className   ='input-form-role'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_role?.description_rol }
                    />
                    <InputData
                        placeholder ='Ingresa la url del role /admin'
                        name        ='url_rol'
                        className   ='input-form-role'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_role?.url_rol }
                    />
                    <InputData
                        placeholder ='Ingresa tu correo eléctronico'
                        name        ='menu_rol'
                        className   ='input-form-role'
                        type        ='text'
                        autoComplete="off"
                        onChange    ={ e => onInput(e) }
                        defaultValue={edit_role?.menu_rol }
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className='button-form-role'
                        disabled = {loading}
                    >
                        { loading ? 'Enviando....' : 'Actualizar Role' }
                    </Button>
                </Box>
            </section>
            { reload && <Navigate to='/roles'/> }
        </WrapperNewRole>
    );
}

export default EditRole;