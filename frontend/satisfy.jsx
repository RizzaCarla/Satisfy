import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import * as SessionAPIUtil from './util/api_session_util'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  //Start Testing
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signup = SessionAPIUtil.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //End Testing

  const root = document.getElementById('root')
  ReactDOM.render(<h1>Satisfy Your Music Cravings!</h1>, root)
})
// ReactDOM.render(<Root store={store}/>, root)