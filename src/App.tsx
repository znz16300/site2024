import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppState } from './data/types/main-props';
import Main from './view/pages/Main/main';
import Notfound from './view/pages/NotFound/not-found';

function App() {
  const [state, setState] = useState<AppState>({
    showMsg: true,
    userLoggedIn: false,
    productsAmount: 42,
    changesInCart: 0,
    history: []
    // here we can add new parameters
  });

  useEffect(() => {
    if (localStorage.getItem('bearerToken') && !state.userLoggedIn) {
      setState((prevState) => ({ ...prevState, userLoggedIn: true, showMsg: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main state={state} setState={setState} />} />
        {/* <Route path="/catalog" element={<Catalog state={state} setState={setState} />} />
        <Route path="/about" element={<About state={state} setState={setState} />} />
        <Route path="/signup" element={<Signup state={state} setState={setState} />} />
        <Route path="/login" element={<Login state={state} setState={setState} />} />
        <Route path="/cart" element={<Cart state={state} setState={setState} />} /> */}
        {/* {state.userLoggedIn && (
          <>
            <Route path="/profile" element={<Profile state={state} setState={setState} />} />
            <Route path="/logout" element={<Logout state={state} setState={setState} />} />
          </>
        )}
        {!state.userLoggedIn && (
          <>
            <Route path="/profile" element={<Login state={state} setState={setState} />} />
            <Route path="/logout" element={<Login state={state} setState={setState} />} />
          </>
        )} */}
        {/* <Route path="catalog/product" element={<Product state={state} setState={setState} />} />
        <Route path="catalog/product/:id" element={<Product state={state} setState={setState} />} /> */}
        <Route path="/*" element={<Notfound state={state} setState={setState} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
