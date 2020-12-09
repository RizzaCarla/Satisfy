import React from 'react';
import { Switch, Route } from 'react-router-dom'

// Containers
import GreetingContainer from './nav-bar/greeting_container'
import SignUpContainer from './signup/signup_container'
import LoginContainer from './login/login_container'

const App = () => (
  <div>
    <h1>Satisfy App</h1>
    <Switch>
      {/* <Route path='/collection/playlists/new' component={}></Route>
      <Route path='/collection/playlists/:playlistId' component={}></Route>
      <Route path='/collection/mainPlaylist' component={}></Route>
      <Route path='/collection/queue' component={}></Route>
      <Route path='/album/:albumId' component={}></Route>
      <Route path='/search' component={}></Route>
      <Route path='/artist/:artistId' component={}></Route> */}
      <Route path='/signup' component={SignUpContainer}></Route>
      <Route path='/login' component={LoginContainer}></Route>
      <Route path='/' component={GreetingContainer}></Route>
    </Switch>
  </div>
)

export default App