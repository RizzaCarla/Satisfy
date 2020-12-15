import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

// Containers
import SignUpContainer from './signup/signup_form_container';
import LoginContainer from './login/login_form_container';
import SplashContainer from './home/splash_container';
import NavBarContainer from './nav-bar/navbar_container';
import SidebarContainer from './side-bar/sidebar_container';
import MusicPlayerContainer from './music-player/music_player_container'
import SongsIndexContainer from './song/song_index_container'

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>
      <ProtectedRoute path='/songs/:songId' component={SongsIndexContainer}></ProtectedRoute>
      <ProtectedRoute path='/' component={SidebarContainer}></ProtectedRoute>
      <ProtectedRoute path='/' component={MusicPlayerContainer}></ProtectedRoute>
    <Switch>
      <AuthRoute exact path='/login' component={LoginContainer}></AuthRoute>
      <AuthRoute exact path='/signup' component={SignUpContainer}></AuthRoute>
      <AuthRoute exact path='/splash' component={SplashContainer}></AuthRoute>
      {/* change / to /splash */}
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