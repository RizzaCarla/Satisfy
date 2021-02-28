import React from 'react';

class ArtistShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      artistLikeInfo: this.props.artistLikeInfo,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    if (this.props.artistLikeInfo !== null) {
      this.setState({
        liked: true,
        artistLikeInfo: this.props.artistLikeInfo
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.artistLikeInfo && this.props.artistLikeInfo != prevProps.artistLikeInfo) {
      if (this.props.artistLikeInfo !== null) {
        this.setState({
          liked: true,
          artistLikeInfo: this.props.artistLikeInfo
        });
      }
    }
  }

  handlePlay() {
    return (
      (e) => {
        this.props.changeCurrentSong(this.props.songId)
        if (audio.paused) {
          audio.play()
          pButton.innerHTML = '&#xe035;'
          greenButton.innerHTML = '&#xe035;'
        } else {
          audio.pause()
          pButton.innerHTML = '&#xe038;'
          greenButton.innerHTML = '&#xe038;'
        }
      }
    )
  }

  handleLike() {
    if (this.state.artistLikeInfo && this.state.liked === true) {
      this.props.destroyLike(this.state.artistLikeInfo.id)
        .then(() => this.setState({
          liked: false,
          artistLikeInfo: null
        }))
    } else {
      this.props.createLike({ likeable_id: this.props.artist.id, likeable_type: "Artist" })
        .then(() => {
          this.props.fetchLikes()
            .then((result) => {
              Object.values(result.likes).map((like) => {
                if ((like.likeable_id === this.props.artist.id) && (like.liker_id === this.props.userId)) {
                  this.setState({
                    liked: true,
                    artistLikeInfo: like
                  })
                }
              })
            })
          })
    }
  }
  
  render() {

    const label = this.state.artistLikeInfo ? <button>FOLLOWING</button> : <button>FOLLOW</button>
    
    if (this.props.artistSongs !== undefined) {  
      return (
        <div className='playlist-container'>
          <div className='item-play-like'>
            <i className="material-icons" id='greenButton' onClick={this.handlePlay()}>&#xe038;</i>
            <div className="likeButton" onClick={this.handleLike}>{label}</div>
          </div>
          <div className='playlist-header'>
            <p>SONGS</p>
          </div>
          <ul className='playlist'>
            {
              this.props.artistSongs.map((song, count3) => {
                return(
                  <li className='playlist-item' key={song.id}>
                    <p>{count3}</p>
                    <h1>{song.song_title}</h1>
                    <h1>{this.props.artistName}</h1>
                    <h1>{song.total_song_time}</h1>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    } else {
      return null
    }
  } 
}

export default ArtistShowPlaylist