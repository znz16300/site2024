/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import AppRoutes from './AppRoutes';
// eslint-disable-next-line import/no-cycle
import { AuthProvider } from './data/api/AuthProvider';
import { AppState } from './data/types/main-props';

interface GlobalState {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

const AppContext = createContext<GlobalState | undefined>(undefined);

function App() {
  const clientOauth = process.env.APP_GOOGLE_OAUTH_API_CLIENT_ID as string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState<AppState>({
    showMsg: false,
    userLoggedIn: false,
    productsAmount: 420,
    changesInCart: 0,
    history: [],
    user: null
  });
  console.log(state);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ state, setState }}>
      <GoogleOAuthProvider clientId={clientOauth}>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </GoogleOAuthProvider>
    </AppContext.Provider>
  );
}

export default App;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
