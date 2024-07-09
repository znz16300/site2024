/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../../../App';

interface ProtectedRouteProps {
  element: any;
}
function ProtectedRoute({ element }: ProtectedRouteProps) {
  // const { isAuthenticated, user } = useAuth();
  const { state } = useAppContext();

  if (!state.user) {
    return <Navigate to="/login" />;
  }

  return element;
}

export default ProtectedRoute;
