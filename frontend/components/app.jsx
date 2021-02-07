import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

// Containers
import SignUpContainer from './signup/signup_form_container';
import LoginContainer from './login/login_form_container';
import SplashContainer from './splash/splash_container';
import HomePageContainer from './home/home_page_container';
import LibraryContainer from './library/library_container';

import NavBarContainer from './nav-bar/navbar_container';
import SidebarContainer from './side-bar/sidebar_container';
import SearchContainer from './search/search_container';
import MusicPlayerContainer from './music-player/music_player_container';

import SongsIndexContainer from './song/song_index_container';
import SongShowContainer from './song/song_show_container';
import ArtistsIndexContainer from './artist/artist_index_container';
import ArtistShowContainer from './artist/artist_show_container';
import AlbumsIndexContainer from './album/album_index_container';
import AlbumShowContainer from './album/album_show_container';



const App = () => (
  <div className='outermost-div'>
    <Switch>
      <ProtectedRoute exact path='/albums/:id' component={AlbumShowContainer}></ProtectedRoute>
      <ProtectedRoute exact path='/albums' component={AlbumsIndexContainer}></ProtectedRoute>
      <ProtectedRoute exact path='/artists/:id' component={ArtistShowContainer}></ProtectedRoute>
      <ProtectedRoute exact path='/artists' component={ArtistsIndexContainer}></ProtectedRoute>
      <ProtectedRoute exact path='/songs/:id' component={SongShowContainer}></ProtectedRoute>
      <ProtectedRoute exact path='/songs' component={SongsIndexContainer}></ProtectedRoute>
      <ProtectedRoute exact path='/search' component={SearchContainer}></ProtectedRoute>
      <ProtectedRoute exact path='/library' component={LibraryContainer}></ProtectedRoute>
      <ProtectedRoute exact path='/home' component={HomePageContainer}></ProtectedRoute>
      <AuthRoute exact path='/login' component={LoginContainer}></AuthRoute>
      <AuthRoute exact path='/signup' component={SignUpContainer}></AuthRoute>
      <Route exact path='/us' component={SplashContainer}></Route>
      <Redirect to='/us'/>
    </Switch>
  </div>
)

export default App