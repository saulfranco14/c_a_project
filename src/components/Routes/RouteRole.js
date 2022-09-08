import React                 from 'react';
import { Outlet, Navigate, useLocation }        from 'react-router-dom';

// 1 = Administrativos
// 2 = User
// 3 = Marketing

const RouteRole = () => {

    // SET ADMIN
    let user_data = {
        rol: 'admin'
    }
    localStorage.setItem('user', JSON.stringify(user_data));

    let location        = useLocation();
    let user_local      = JSON.parse(localStorage.getItem('user'));

    if( user_local != null ){
        if( ['admin'].includes(user_local.rol) ){
            return <Outlet />;
        }else{
            return <Navigate to="/errorRole" state={{ from: location }} />;
        }
    }else{
        return <Navigate to="/" state={{ from: location }} />;
    }
}

export default RouteRole;