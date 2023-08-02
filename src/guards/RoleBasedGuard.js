import React from 'react';
import { Navigate } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen';
import useAuth from '../hooks/useAuth';

const isGranted = (user, accessibleRoles) => accessibleRoles.includes(user.role);
const RoleBasedGuard = ({ accessibleRoles, children }) => {
  const { isAuthenticated, isInitialized, user } = useAuth();
  if (!isInitialized) return <LoadingScreen />;
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!isGranted(user, accessibleRoles)) return <Navigate to="/" />;
  return <>{children}</>;
};

export default RoleBasedGuard;
