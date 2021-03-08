import React from 'react';
import LikedSongsHeader from './liked_songs_header';
import LikedSongsPlaylist from './liked_songs_playlist';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class LikedSongs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allLikes: [],
      allSongLikes: [],
      allLikedSongs: [],
    }
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
    .then((result) => {
        let allLikedSongs = []
        Object.values(result.user.liked_songs).forEach((songObject) => {
          Object.values(songObject).forEach((song, count) => {
            allLikedSongs.push(song)
          })
        })
        this.setState({
          allLikedSongs: allLikedSongs
        })
      })
      .then(() => this.props.fetchAlbums())
      .then(() => {
        this.props.fetchLikes()
        .then(() => this.setState({
          allLikes: Object.values(this.props.likes)
        }))
        .then(() => {
          let allSongLikes = []
          this.state.allLikes.forEach((like) => {
            if ((like.likeable_type === "Song") && (like.liker_id === this.props.userId)) {
              allSongLikes.push(like)
            }
          })
          this.setState({
            allSongLikes: allSongLikes
          })
        })
      })
    }
    
    componentDidUpdate(prevProps) {
      if (this.props.allLikes && this.props.allLikes !== prevProps.allLikes) {
        this.props.fetchUser(this.props.userId)
          .then((result) => {
            this.setState({
              allLikedSongs: Object.values(result.user.liked_songs)
            })
          })
          .then(() => this.props.fetchAlbums())
          .then(() => {
            this.props.fetchLikes()
              .then(() => this.setState({
                allLikes: Object.values(this.props.likes)
              }))
              .then(() => {
                let allSongLikes = []
                this.state.allLikes.forEach((like) => {
                  if ((like.likeable_type === "Song") && (like.liker_id === this.props.userId)) {
                    allSongLikes.push(like)
                  }
                })
                this.setState({
                  allSongLikes: allSongLikes
                })
              })
          })
      }
    }
    
  render() {
    if (this.props.user === undefined) {
      return null
    }

    return (
      <div className='show-container'>
          <SideBarContainer />
          <NavBarContainer />
          <MusicPlayerContainer />
        <div className='inner-show-container'>
          <div className='liked-songs-header'>
            <LikedSongsHeader
              key={this.props.songId}
              user={this.props.user}
              totalSongs={this.state.allSongLikes.length}
              />
          </div>
          <div className='liked-songs-playlist'>
            <LikedSongsPlaylist
              allLikes={this.state.allLikes}
              allSongLikes={this.state.allSongLikes}
              allLikedSongs={this.state.allLikedSongs}
              
              fetchLikes={this.props.fetchLikes}
              createLike={this.props.createLike}
              destroyLike={this.props.destroyLike}
              
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
              clearQueue={this.props.clearQueue}
              repeatSong={this.props.repeatSong}
              shuffleSongs={this.props.shuffleSongs}
              setPrevSong={this.props.setPrevSong}
              setNextSong={this.props.setNextSong}
              setCurrentSong={this.props.setCurrentSong}
              changeCurrentSong={this.props.changeCurrentSong}
              setCurrentPlaylist={this.props.setCurrentPlaylist}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default LikedSongs;