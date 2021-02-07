import React from 'react';
import SongIndexContainer from '../song/song_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import AlbumIndexContainer from '../album/album_index_container';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <SideBarContainer />
        <MusicPlayerContainer />
        <div className='home-page-container'>
          <div className='inner-home-page-container'>
            <div className='discover-container'>
              <h1>Discover New Songs</h1>
              <div className='discover-index'>
                <SongIndexContainer />
              </div>
            </div>
            <div className='discover-container'>
              <h1>Discover New Artists</h1>
              <div className='discover-index'>
                <ArtistIndexContainer />
              </div>
            </div>
            <div className='discover-container'>
              <h1>Discover New Albums</h1>
              <div className='discover-index'>
                <AlbumIndexContainer />
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default HomePage;