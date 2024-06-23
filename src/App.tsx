import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppState } from './data/types/main-props';
import AppRoutes from './AppRoutes';

function App() {
  const [state, setState] = useState<AppState>({
    showMsg: true,
    userLoggedIn: false,
    productsAmount: 42,
    changesInCart: 0,
    history: []
    // here we can add new parameters
  });

  return (
    <BrowserRouter>
      <AppRoutes state={state} setState={setState} />
    </BrowserRouter>
  );
}

export default App;
