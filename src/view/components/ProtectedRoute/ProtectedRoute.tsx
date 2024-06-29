/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../data/api/AuthProvider';

interface ProtectedRouteProps {
  element: any;
}
function ProtectedRoute({ element }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return element;
}

export default ProtectedRoute;
