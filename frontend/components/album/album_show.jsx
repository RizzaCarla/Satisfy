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

    componentDidMount() {
      this.props.fetchAlbum(this.props.match.params.albumId)
        .then(() => {
          this.props.fetchLikes()
          .then(() => this.setState({
            allLikes: Object.values(this.props.likes)
          }))
          .then(() => {
            this.state.allLikes.forEach((like) => {
              if ((like.likeable_id === this.props.album.id) && (like.liker_id === this.props.userId)) {
                this.setState({
                  albumLikeInfo: like
                })
              }
            })
          })
        })
    }

  componentDidUpdate(prevProps) {
    if (this.props.allLikes && this.props.allLikes !== prevProps.allLikes) {
      this.props.fetchLikes()
        .then(() => this.setState({
          allLikes: Object.values(this.props.likes)
        }))
      this.state.allLikes.forEach((like) => {
        if ((like.likeable_id === this.props.album.id) && (like.liker_id === this.props.userId)) {
          this.setState({
            albumLikeInfo: like
          })
        }
      })
    }
  }
  
  render() {
    
    if (this.props.album === undefined) {
      return null
    }
        return (
          <div className='show-container'>
            <NavBarContainer />
            <SideBarContainer />
            <MusicPlayerContainer />
            <div className='inner-show-container'>
                <div>
                  <AlbumShowHeader
                    key={this.props.albumId}
                    albumSongs={this.props.album.songs}
                    albumTitle={this.props.album.album_title}
                    albumPhotoUrl={this.props.album.albumPhotoUrl} 
                    artistPhotoUrl={this.props.album.artistPhotoUrl}
                    artistName={this.props.album.artist.artist_name}
                  />
                </div>
                <div>
                  <AlbumShowPlaylist 
                    album={this.props.album}
                    userId={this.props.userId}
                    albumId={this.props.album.id} 
                    allLikes={this.state.allLikes}
                    fetchLikes={this.props.fetchLikes}
                    createLike={this.props.createLike}
                    albumSongs={this.props.album.songs}
                    destroyLike={this.props.destroyLike}
                    albumLikeInfo={this.state.albumLikeInfo}
                    artistName={this.props.album.artist.artist_name}
                    changeCurrentSong={this.props.changeCurrentSong}

                    muted={this.props.muted}
                    playing={this.props.playing}
                    repeating={this.props.repeating}
                    shuffling={this.props.shuffling}
                    prevSongId={this.props.prevSongId}
                    nextSongId={this.props.nextSongId}
                    currentSongId={this.props.currentSongId}
                    currentPlaylist={this.props.currentPlaylist}

                    playSong={this.props.playSong}
                    pauseSong={this.props.pauseSong}
                    dequeueSong={this.props.dequeueSong}
                    enqueueSong={this.props.enqueueSong}
                    repeatSong={this.props.repeatSong}
                    shuffleSongs={this.props.shuffleSongs}
                    setPrevSong={this.props.setPrevSong}
                    setNextSong={this.props.setNextSong}
                    setCurrentSong={this.props.setCurrentSong}
                    setCurrentPlaylist={this.props.setCurrentPlaylist}
                  />
                </div>
              </div>
          </div>
        )
  }
}

export default AlbumShow