import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './view/pages/Main/main';
import Notfound from './view/pages/NotFound/not-found';
import { AppState } from './data/types/main-props';

interface AppRoutesProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

function AppRoutes({ state, setState }: AppRoutesProps) {
  return (
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
  );
}

export default AppRoutes;
