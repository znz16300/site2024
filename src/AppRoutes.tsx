import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './view/pages/Main/main';
import Notfound from './view/pages/NotFound/not-found';
import { AppState } from './data/types/main-props';
import News from './view/pages/News/news';
import About from './view/pages/About/about';
// import NewsOne from './view/pages/NewsOne/newsone';

interface AppRoutesProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

function AppRoutes({ state, setState }: AppRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={<Main state={state} setState={setState} />} />
      <Route path="/news" element={<News state={state} setState={setState} />} />
      <Route path="/about" element={<About state={state} setState={setState} />} />
      {/* <Route path="/news/item/:id" element={<NewsOne state={state} setState={setState} />} /> */}
      {/* <Route path="/news" element={<About state={state} setState={setState} />} /> */}
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
