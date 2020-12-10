import React from 'react';
import { Switch, Route, AuthRoute, Link } from 'react-router-dom';

// Containers
import SignUpContainer from './signup/signup_form_container';
import LoginContainer from './login/login_form_container';
import Splash from './home/splash';
import NavBarContainer from './nav-bar/navbar'

const App = () => (
  <div>
    <header>
      <Link to='/'>
        <h1>Satisfy App</h1>
      </Link>
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
      <Route exact path='/signup' component={SignUpContainer}></Route>
      <Route exact path='/login' component={LoginContainer}></Route>
      <Route path='/' component={Splash}></Route>
    </Switch>
  </div>
)

export default App