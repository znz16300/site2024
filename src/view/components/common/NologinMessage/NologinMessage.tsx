import React, { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import * as classes from './NologinMessage.module.css';
// eslint-disable-next-line import/no-cycle
import { useAppContext } from '../../../../App';

function NologinMessage() {
  const { state, setState } = useAppContext();
  function hideMessage() {
    setState((prevState) => ({ ...prevState, showMsg: false }));
  }

  function hideMessageFromKey(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hideMessage();
    }
  }

  return (
    <div className={`${classes.nologin} ${!state.showMsg ? classes.hide : ''} `}>
      {state.showMsg && (
        <>
          <div className={classes.wrapper}>
            <span>You are unauthorized user</span>
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
          </div>
          <div
            className={classes.button}
            onClick={hideMessage}
            onKeyDown={hideMessageFromKey}
            role="button"
            tabIndex={0}
            aria-label="hide message"
          />
        </>
      )}
    </div>
  );
}

export default NologinMessage;
