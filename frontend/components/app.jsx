import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

// Containers
import SignUpContainer from './signup/signup_form_container';
import LoginContainer from './login/login_form_container';
import Splash from './home/splash';
import NavBarContainer from './nav-bar/navbar_container'

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>
    <Switch>
      {/* <Route path='/collection/playlists/new' component={}></Route>
      <Route path='/collection/playlists/:playlistId' component={}></Route>
      <Route path='/collection/mainPlaylist' component={}></Route>
      <Route path='/collection/queue' component={}></Route>
      <Route path='/album/:albumId' component={}></Route>
      <Route path='/search' component={}></Route>
      <Route path='/artist/:artistId' component={}></Route> */}
      <AuthRoute exact path='/login' component={LoginContainer}></AuthRoute>
      <AuthRoute exact path='/signup' component={SignUpContainer}></AuthRoute>
      <Route path='/' component={Splash}></Route>
      <Route path='/'></Route>
    </Switch>
  </div>
)

export default App