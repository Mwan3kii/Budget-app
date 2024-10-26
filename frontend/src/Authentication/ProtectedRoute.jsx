import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const localUser = JSON.parse(localStorage.getItem('user logged-in'));

    // Check if the user is authenticated
    if (!localUser?.token) {
        return <Navigate to='/login' />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
