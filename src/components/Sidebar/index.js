import React                from 'react';
import { SideBar }          from './sidebar.styles';
import { useNavigate }      from 'react-router-dom';

const Index = () => {

    const navigate = useNavigate();

    const goSite = (url) =>{
        navigate(`/${url}`)
    }

    const user_local      = JSON.parse(localStorage.getItem('user'));
    let modules;

    if( ['admin'].includes(user_local.rol) ){
        modules = ['users','roles'];
    }

    if( ['users'].includes(user_local.rol) ){
        modules = ['users'];
    }

    if( ['marketing'].includes(user_local.rol) ){
        modules = ['users'];
    }

    return (
        <SideBar>
            <ul>
                {
                    modules.map((item, index)=>(
                        <li
                            key={index}
                            onClick={()=>goSite(item)}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </SideBar>
    );
}

export default Index;