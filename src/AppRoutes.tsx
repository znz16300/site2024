import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Main from './view/pages/Main/main';
import News from './view/pages/News/news';
import About from './view/pages/About/about';
import Page from './view/pages/Page/Page';
import Documents from './view/pages/Documents/Documents';
import { DashboardPage } from './view/components/DashboardPage';
import LoginPage from './view/pages/Login/GoogleLogin';
import Profile from './view/pages/Profile/Profile';
import ProtectedRoute from './view/components/ProtectedRoute/ProtectedRoute';
import Logout from './view/pages/Logout/Logout';
import Search from './view/pages/Search/Search';

interface RedirectToPageProps {
  path: string;
}

function RedirectToPage({ path }: RedirectToPageProps) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/news" element={<News />} />
      <Route path="/page" element={<Page />} />
      <Route path="/about" element={<About />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
      {/* <Route path="/login" element={<Login state={state} setState={setState} />} /> */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route
        path="/acts"
        element={
          <RedirectToPage path="/page?titlePages=Діяльність&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" />
        }
      />
      <Route
        path="/contacts"
        element={
          <RedirectToPage path="/page?titlePages=Контакти&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" />
        }
      />
      <Route
        path="/openinfo"
        element={
          <RedirectToPage path="/page?titlePages=Відкритість%20та%20прозорість&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" />
        }
      />
      <Route
        path="/materials"
        element={
          <RedirectToPage path="/page?titlePages=Матеріально-технічна%20база%20закладу&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI" />
        }
      />

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
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
