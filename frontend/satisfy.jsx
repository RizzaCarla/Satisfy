import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// Test
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
  ReactDOM.render(<Root store={store}/>, root)
})
// ReactDOM.render(<Root store={store}/>, root)