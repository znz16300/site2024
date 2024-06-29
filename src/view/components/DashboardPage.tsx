/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */

import React from 'react';
import { useAuth } from '../../data/api/AuthProvider';
import { GoogleUser } from '../../data/types/main-props';

/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/prefer-default-export
export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const googleUser: GoogleUser = user;
  console.log(googleUser);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome {googleUser ? googleUser.name : ''}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
