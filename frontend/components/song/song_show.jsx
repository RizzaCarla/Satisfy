import React from 'react';
import SongShowHeader from './song_show_header';
import SongShowPlaylist from './song_show_playlist';
import SideBarContainer from '../side-bar/sidebar_container';
import NavBarContainer from '../nav-bar/navbar_container';

class SongShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allLikes: [],
      songLikeInfo: null,
      liked: false,
      songs: [],
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
              if ((like.likeable_id === this.props.song.id) && (like.liker_id === this.props.userId) && (like.likeable_type === 'Song')) {
                this.setState({
                  songLikeInfo: like
                })
              }
            }) 
         })
      })
  }

  componentDidUpdate(prevProps) {
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
    if (this.props.song === undefined) {
      return null
    }

    return (
      <div className='show-container'>
        <NavBarContainer />
        <SideBarContainer />
        <div className='inner-show-container'>
          <div>
            <SongShowHeader
              key={this.props.songId}
              song={this.props.song}
              songArtist={this.props.song.artist}
              songAlbum={this.props.song.album}
              songTitle={this.props.song.song_title}
              totalSongTime={this.props.song.total_song_time}
            />
          </div>
          <div>
            <SongShowPlaylist
              song={this.props.song} 
              songs={[this.props.song]} 
              songId={this.props.song.id} 
              userId={this.props.userId} 
              songArtist={this.props.song.artist}
              allLikes={this.state.allLikes}
              songLikeInfo={this.state.songLikeInfo}
              fetchLikes={this.props.fetchLikes}
              createLike={this.props.createLike}
              destroyLike={this.props.destroyLike}
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
              clearQueue={this.props.clearQueue}
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

export default SongShow;