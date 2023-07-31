import React from 'react';
import { Navigate } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen';
import useAuth from '../hooks/useAuth';

const getUserRole = (user, accessibleRoles) => {
  if (user?.roles?.length > 0) {
    return accessibleRoles === user.role;
  }
  return false;
};
const RoleBasedGuard = ({ accessibleRoles, children }) => {
  const { isAuthenticated, isInitialized, user } = useAuth();
  if (!isInitialized) return <LoadingScreen />;
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (getUserRole(user, accessibleRoles)) return <Navigate to="/" />;
  return <>{children}</>;
};

export default RoleBasedGuard;
