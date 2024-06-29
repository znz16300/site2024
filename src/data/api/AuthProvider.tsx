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
      localStorage.setItem('token', JSON.stringify(resp));
      const res = await fetchUserDetails(resp.credential);
      localStorage.setItem('dateCreateToken', Math.floor(Date.now() / 1000).toString());
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
    localStorage.removeItem('dateCreateToken');
    setState((prevState) => ({ ...prevState, userLoggedIn: false, user: null }));
  };

  const isAuthenticated = (): boolean => {
    return user !== null; // Перевіряємо локальний стан користувача
  };

  const refreshToken = async (refreshTok: string) => {
    try {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          client_id: process.env.APP_GOOGLE_OAUTH_API_CLIENT_ID as string,
          client_secret: process.env.APP_GOOGLE_OAUTH_API_CLIENT_SECRET as string,
          refresh_token: refreshTok,
          grant_type: 'refresh_token'
        })
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', JSON.stringify(data));
        localStorage.setItem('dateCreateToken', Math.floor(Date.now() / 1000).toString());
        await fetchUserDetails(data.access_token);
      } else {
        console.log('Failed to refresh token', data);
        logout();
      }
    } catch (error) {
      console.log('Error refreshing token', error);
      logout();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const dateCreateTokenStr = localStorage.getItem('dateCreateToken') || '0';
    const dateCreateToken = parseInt(dateCreateTokenStr, 10);

    if (token) {
      const tokenJSON = JSON.parse(token);
      const authToken = tokenJSON.access_token;
      const expiresIn = tokenJSON.expires_in;
      const refreshTokenValue = tokenJSON.access_token;

      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      const tokenExpiryTime = dateCreateToken + expiresIn;

      if (currentTimeInSeconds >= tokenExpiryTime) {
        refreshToken(refreshTokenValue).then(() => {
          const newToken = localStorage.getItem('token');
          const newTokenJSON = newToken ? JSON.parse(newToken) : null;
          if (newTokenJSON) {
            fetchUserDetails(newTokenJSON.access_token);
          }
        });
      } else {
        fetchUserDetails(authToken);
      }
    } else {
      googleLogin();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
