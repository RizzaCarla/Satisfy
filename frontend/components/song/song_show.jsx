import React from 'react';
import SongShowHeader from './song_show_header';
import SongShowPlaylist from './song_show_playlist';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class SongShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allLikes: [],
      songLikeInfo: null,
      liked: false
    }
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId)
      .then(() => this.props.fetchAlbums())
      .then(() => {
        this.props.fetchLikes()
        .then(() => this.setState({
          allLikes: Object.values(this.props.likes)
          }))
          .then(() => {
            this.state.allLikes.forEach((like) => {
              if ((like.likeable_id === this.props.song.id) && (like.liker_id === this.props.userId)) {
                this.setState({
                  songLikeInfo: like
                })
              }
            }) 
          })
        })
    }

  componentWillUpdate(prevProps) {
    if (this.props.allLikes && this.props.allLikes !== prevProps.allLikes) {
    this.props.fetchSong(this.props.match.params.songId)
      .then(() => this.props.fetchAlbums())
      .then(() => {
        this.props.fetchLikes()
        .then(() => this.setState({
          allLikes: Object.values(this.props.likes)
          }))
          .then(() => {
            this.state.allLikes.forEach((like) => {
              if ((like.likeable_id === this.props.song.id) && (like.liker_id === this.props.userId)) {
                this.setState({
                  songLikeInfo: like
                })
              }
            }) 
          })
        })
      }
    }

    render() {
    if (this.props.song !== undefined) {
      return (
        <div className='show-container'>
          <NavBarContainer />
          <SideBarContainer />
          <MusicPlayerContainer />
          <div className='inner-show-container'>
            <div>
              <SongShowHeader
                key={this.props.songId}
                song={this.props.song}
                songArtist={this.props.song.artist}
                songAlbum={this.props.albums[this.props.song.album_id]}
                songTitle={this.props.song.song_title}
                totalSongTime={this.props.song.total_song_time}
                />
            </div>
            <div>
              <SongShowPlaylist
                song={this.props.song} 
                songId={this.props.song.id} 
                userId={this.props.userId} 
                songArtist={this.props.song.artist}
                allLikes={this.state.allLikes}
                songLikeInfo={this.state.songLikeInfo}
                createLike={this.props.createLike}
                destroyLike={this.props.destroyLike}
                changeCurrentSong={this.props.changeCurrentSong}
                fetchLikes={this.props.fetchLikes}
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

export default SongShow;