import React from 'react';
import { Navigate } from 'react-router';

import LoadingScreen from '../components/LoadingScreen';
import useAuth from '../hooks/useAuth';

const GuestGuard = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();
  if (!isInitialized) return <LoadingScreen />;
  if (isAuthenticated) return <Navigate replace to="/" />;
  return <>{children}</>;
};

export default GuestGuard;
