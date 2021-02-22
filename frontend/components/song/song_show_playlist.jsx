import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

class SongShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      songLikeInfo: this.props.songLikeInfo,
    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }
  
  componentDidMount() {
    if (this.props.songLikeInfo !== null) {
      this.setState({
        liked: true,
        songLikeInfo: this.props.songLikeInfo
      });
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.songLikeInfo && this.props.songLikeInfo != prevProps.songLikeInfo) {
      if (this.props.songLikeInfo !== null) {
        this.setState({
          liked: true,
          songLikeInfo: this.props.songLikeInfo
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
    if (this.state.songLikeInfo && this.state.liked === true) {
        this.props.destroyLike(this.state.songLikeInfo.id)
          .then(() => this.setState({
            liked: false,
            songLikeInfo: null
          }))
    } else {
      this.props.createLike({likeable_id: this.props.song.id, likeable_type: "Song"})
        .then((result) => {
          this.props.fetchLikes()
          .then((result) => {
            Object.values(result.likes).map((like) => {
              if ((like.likeable_id === this.props.song.id) && (like.liker_id === this.props.userId)) {
                this.setState({
                  liked: true,
                  songLikeInfo: like
                })
              }
            })
          })
        })
    }

  }
  
  render() {
    if (this.props.songArtist === undefined) {
      return null
    }

    const label = this.state.songLikeInfo ? <FavoriteIcon style={{ fontSize: 40 }} /> : <FavoriteBorderIcon style={{ fontSize: 40 }} />
    
    return (
      <div className='playlist-container'>
        <div className='album-item-play-like'>
          <i className="material-icons" id='greenButton' onClick={this.handlePlay()}>&#xe038;</i>
          <div className="likeButton" onClick={this.handleLike}>{label}</div>
        </div>
        <div className='playlist-header'>
          <p>#</p>
          <p>TITLE</p>
          <i className='far'>&#xf017;</i>
        </div>
        <hr className='line-separator'></hr>
        <ul className='playlist'>
          <li className='playlist-item'>
            <p>1</p>
            <div>
              <h1>{this.props.song.song_title}</h1>
              <h1>{this.props.songArtist.artist_name}</h1>
            </div>
            <h1>{this.props.song.total_song_time}</h1>
          </li>
        </ul>
      </div>
    )
  }
}

export default SongShowPlaylist