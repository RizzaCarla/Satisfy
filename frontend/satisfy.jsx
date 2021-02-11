import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Testing Start
import { fetchArtists } from './actions/artist_actions'
// End

document.addEventListener('DOMContentLoaded', () => {
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      userSession: { 
        userId: window.currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //START TEST
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchArtists = fetchArtists;
  // END
  
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)
})
