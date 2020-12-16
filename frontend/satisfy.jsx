import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      userSession: { 
        userId: window.currentUser.id
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.currentSong;
  } else {
    store = configureStore();
  }
  //START TEST
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)
})
