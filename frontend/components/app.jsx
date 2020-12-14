import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

// Containers
import SignUpContainer from './signup/signup_form_container';
import LoginContainer from './login/login_form_container';
import SplashContainer from './home/splash_container';
import NavBarContainer from './nav-bar/navbar_container'
import MusicPlayerContainer from './music-player/music_player_container'

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>
    <Switch>
      {/* <AuthRoute exact path='/musicplayer' component={MusicPlayerContainer}></AuthRoute> */}
      <AuthRoute exact path='/login' component={LoginContainer}></AuthRoute>
      <AuthRoute exact path='/signup' component={SignUpContainer}></AuthRoute>
      <Route path='/' component={SplashContainer}></Route>
      <Route path='/'></Route>
    </Switch>
  </div>
)

export default App

{/* <Route path='/collection/playlists/new' component={}></Route>
<Route path='/collection/playlists/:playlistId' component={}></Route>
<Route path='/collection/mainPlaylist' component={}></Route>
<Route path='/collection/queue' component={}></Route>
<Route path='/album/:albumId' component={}></Route>
<Route path='/search' component={}></Route>
<Route path='/artist/:artistId' component={}></Route> */}