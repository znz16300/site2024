/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// AuthProvider.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { GoogleOAuthProvider, useGoogleLogin, googleLogout } from '@react-oauth/google';
import { OAuthResp } from '../types/main-props';
// eslint-disable-next-line import/no-cycle
import { useAppContext } from '../../App';

interface AuthContextType {
  user: any;
  login: () => Promise<boolean>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const { state, setState } = useAppContext();

  const fetchUserDetails = async (token: string) => {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const userInfo = await response.json();

    if (userInfo) {
      setUser(userInfo);
      setState((prevState) => ({ ...prevState, userLoggedIn: true, user: userInfo }));
      return userInfo;
    }
    return null;
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      const resp: OAuthResp = response as unknown as OAuthResp;
      localStorage.setItem('token', resp.access_token);
      const res = await fetchUserDetails(resp.credential);
      window.location.href = `${window.location.origin}/`;
      return true;
    },
    onError: () => {
      console.log('Login Failed');
      return false;
    },
    scope:
      'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
  });

  const login = (): Promise<boolean> => {
    return new Promise((resolve) => {
      googleLogin();
      resolve(true);
    });
  };

  const logout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem('token');
    setState((prevState) => ({ ...prevState, userLoggedIn: false, user: null }));
  };

  const isAuthenticated = (): boolean => {
    return user !== null; // Перевіряємо локальний стан користувача
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserDetails(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
