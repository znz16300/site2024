/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import Footer from '../../components/common/footer/footer';
import * as classes from './profile.module.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GoogleUser, MainProps, OAuthResp } from '../../../data/types/main-props';
// eslint-disable-next-line import/no-cycle
import { useAuth } from '../../../data/api/AuthProvider';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/common/header/header';

function Profile() {
  // const { state, setState } = useAppContext();
  const { user, logout } = useAuth();
  const googleUser: GoogleUser = user;

  return (
    <div className={classes.profileWrapper}>
      <Header page="profile" />
      <section className={classes.profileWrapper}>
        <h2>Dashboard</h2>
        <p>Welcome {googleUser ? googleUser.name : ''}</p>
        <button onClick={() => logout()}>Logout</button>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
