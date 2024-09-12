import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateRoute =({requiredRole}) => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    if(!user) {
        return <Navigate to ="/login" />;
    }

    if(requiredRole && user.userRole !== requiredRole) {
        return <Navigate to ="/" />;
    }

    return <Outlet />;
};

export default PrivateRoute;