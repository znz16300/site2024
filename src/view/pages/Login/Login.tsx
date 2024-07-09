/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import * as classes from './login.module.css';
import { OAuthResp } from '../../../data/types/main-props';
import { useAppContext } from '../../../App';

const page = 'login';

function Login() {
  const { setState } = useAppContext();
  return (
    <div className={classes.loginWrapper}>
      <Header page={page} />
      <section className={classes.login}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            setState((prevState) => ({ ...prevState, oAuthResp: credentialResponse as OAuthResp }));
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Login;
