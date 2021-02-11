import React from 'react';
import ArtistShowHeader from './artist_show_header';
import ArtistShowPlaylist from './artist_show_playlist';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class ArtistShow extends React.Component {
  componentDidMount() {
    this.props.fetchArtist(this.props.match.params.artistId)
      .then(() => this.props.fetchAlbums())
  }
  
  render() {
    if (this.props.artist !== undefined) {
      return (
        <div>
        <NavBarContainer />
        <SideBarContainer />
        <MusicPlayerContainer />
        <div className='artist-show-container'>
          <header>
            <ArtistShowHeader
              key={this.props.artistId}
              artistPhotoUrl={this.props.artist.artistPhotoUrl}
              artistName={this.props.artist.artist_name}
              />
          </header>
          <div>
            <ArtistShowPlaylist
              artistSongs={this.props.artist.songs}
              artistName={this.props.artist.artist_name}
              changeCurrentSong={this.props.changeCurrentSong}
              />
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
}

export default ArtistShow