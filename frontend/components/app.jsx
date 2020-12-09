import React from 'react';
import { Link, Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container'

const App = () => (
  <div>
    <h1>Satisfy App</h1>
    <Switch>
      <Route path='/collection/playlists/new' component={}></Route>
      <Route path='/collection/playlists/:playlistId' component={}></Route>
      <Route path='/collection/mainPlaylist' component={}></Route>
      <Route path='/collection/queue' component={}></Route>
      <Route path='/album/:albumId' component={}></Route>
      <Route path='/artist/:artistId' component={}></Route>
      <Route path='/signup' component={}></Route>
      <Route path='/login' component={}></Route>
      <Route path='/search' component={}></Route>
      <Route path='/' component={Greeting}>
        <GreetingContainer />
      </Route>
    </Switch>
  </div>
)

export default App