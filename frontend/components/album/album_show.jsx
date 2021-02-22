import React from 'react';
import AlbumShowHeader from './album_show_header';
import AlbumShowPlaylist from './album_show_playlist';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';


class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allLikes: [],
      albumLikeInfo: null,
      liked: false,
      albumSongs: [],
    }
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.match.params.albumId)
      .then(() => this.props.fetchArtists())
      .then(() => {
        this.props.fetchLikes()
        .then(() => this.setState({
          allLikes: Object.values(this.props.likes)
        }))
        .then(() => {
          
        })
      })
      
  }

  render() {
    
    if (this.props.album.songs !== undefined) {
      return (
        <div>
          <NavBarContainer />
          <SideBarContainer />
          <MusicPlayerContainer />
          <div className='album-show-container'>
              <header>
                <AlbumShowHeader
                  key={this.props.albumId}
                  albumPhotoUrl={this.props.album.albumPhotoUrl} 
                  albumTitle={this.props.album.album_title}
                  artistName={this.props.artists[this.props.album.artist_id].artist_name}
                  albumSongs={this.props.album.songs}
                  />
              </header>
              <div>
                <AlbumShowPlaylist 
                  albumSongs={this.props.album.songs}
                  artistName={this.props.artists[this.props.album.artist_id].artist_name}
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

export default AlbumShow