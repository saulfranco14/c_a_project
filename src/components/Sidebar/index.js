import React                from 'react';
import { SideBar }          from './sidebar.styles';
import { useNavigate }      from 'react-router-dom';

const Index = () => {

    const navigate = useNavigate();

    const goSite = (url) =>{
        navigate(`/${url}`)
    }

    let sidebar_test = ['users','roles'];

    return (
        <SideBar>
            <ul>
                {
                    sidebar_test.map((item, index)=>(
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