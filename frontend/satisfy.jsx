import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import * as SessionAPIUtil from './util/api_session_util'

document.addEventListener('DOMContentLoaded', () => {
  //Start Testing
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signup = SessionAPIUtil.signup;
  //End Testing

  const store = configureStore();
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})
// ReactDOM.render(<Root store={store}/>, root)