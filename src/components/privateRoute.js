import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const PrivateRoute = ({ element: Component }) => {
  const { user } = useAuth(); // Accéder au contexte d'authentification

  return user ? Component : <Navigate to="/signIn" />;
};

export default PrivateRoute;