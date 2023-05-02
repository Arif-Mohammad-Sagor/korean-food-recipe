import React, { useContext } from 'react'
import { AuthContexts } from '../contexts/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ProtectRoute = ({ children }) => {

  const { user,loading } = useContext(AuthContexts);

  const location = useLocation();

    
    if (loading) {
      return <Spinner animation="border" variant="primary" />;
    }

    if (user) {
      return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
}

export default ProtectRoute