import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Define types for component props
interface PrivateRouteProps {
  requiredRole?: string;
  children?: React.ReactNode; // Indicate that `children` can be any React element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requiredRole, children }) => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  if (!user) {
    return <Navigate to="/login" />; // Redirect to login if user is not authenticated
  }

  if (requiredRole && user.userRole !== requiredRole) {
    return <Navigate to="/" />; // Redirect to home if user does not have the required role
  }

  return <>{children || <Outlet />} </>; // Render `children` if provided, otherwise render `Outlet`
};

export default PrivateRoute;
