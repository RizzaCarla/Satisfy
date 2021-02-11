import React from 'react';
import SongIndexComponent from '../song/song_index';
import ArtistIndexComponent from '../artist/artist_index';
import AlbumIndexComponent from '../album/album_index';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchArtists()
      .then(() => this.props.fetchAlbums())
      .then(() => this.props.fetchSongs())
  }

  render() {

    if (!this.props.albums) {
      return null
    }
    if (!this.props.artists) {
      return null
    }
    if (!this.props.songs) {
      return null
    }

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
                <SongIndexComponent 
                  albums={this.props.albums}
                  artists={this.props.artists}
                  songs={Object.values(this.props.songs)}
                  changeCurrentSong={this.props.changeCurrentSong}
                  />
              </div>
            </div>
            <div className='discover-container'>
              <h1>Discover New Artists</h1>
              <div className='discover-index'>
                <ArtistIndexComponent 
                  songs={this.props.songs}
                  albums={this.props.albums}
                  artists={Object.values(this.props.artists)}
                  changeCurrentSong={this.props.changeCurrentSong}
                  />
              </div>
            </div>
            <div className='discover-container'>
              <h1>Discover New Albums</h1>
              <div className='discover-index'>
                <AlbumIndexComponent 
                  songs={this.props.songs}
                  artists={this.props.artists}
                  albums={Object.values(this.props.albums)}
                  changeCurrentSong={this.props.changeCurrentSong}
                />
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default HomePage;