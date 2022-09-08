import React                from 'react';
import { SideBar }          from './sidebar.styles';
import { useNavigate }      from 'react-router-dom';

const Index = () => {

    const navigate = useNavigate();

    const goSite = (url) =>{
        navigate(url)
    }

    return (
        <SideBar>
            <ul>
                <li onClick={()=>goSite('/profile')}>My perfil</li>
                <li onClick={()=>goSite('/users')}>Usuarios</li>
                <li onClick={()=>goSite('/roles')}>Roles</li>
            </ul>
        </SideBar>
    );
}

export default Index;