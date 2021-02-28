import React from 'react';
import Queue from '../queue/queue'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

class AlbumShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      albumLikeInfo: this.props.albumLikeInfo,
      // playing: 

    }
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleQueue = this.handleQueue.bind(this);
  }

  componentDidMount() {
    if (this.props.albumLikeInfo !== null) {
      this.setState({
        liked: true,
        albumLikeInfo: this.props.albumLikeInfo,
        // currentPlaylist
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.albumLikeInfo && this.props.albumLikeInfo != prevProps.albumLikeInfo) {
      if (this.props.albumLikeInfo !== null) {
        this.setState({
          liked: true,
          albumLikeInfo: this.props.albumLikeInfo
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
    if (this.state.albumLikeInfo && this.state.liked === true) {
      this.props.destroyLike(this.state.albumLikeInfo.id)
        .then(() => this.setState({
          liked: false,
          albumLikeInfo: null
        }))
    } else {
      this.props.createLike({ likeable_id: this.props.album.id, likeable_type: "Album" })
        .then(() => {
          this.props.fetchLikes()
            .then((result) => {
              Object.values(result.likes).map((like) => {
                if ((like.likeable_id === this.props.album.id) && (like.liker_id === this.props.userId)) {
                  this.setState({
                    liked: true,
                    albumLikeInfo: like
                  })
                }
              })
            })
        })
    }

  }

  handleQueue(songId, allSongs) {
    // INITIALLY CREATE A PARTIAL QUEUE
    let partialQueue = []
    if (allSongs !== null && songId !== null) {
      let prevIndex
      if (index === 0) {
        this.props.setPrevSong(null)
      } else if (index > 0) {
        prevIndex = (index - 1)
        // console.log(allSongs[prevIndex].id)
        // this.props.setPrevSong(allSongs[prevIndex].id)
      }
      // this.props.setPrevSong(allSongs[index-1].id)
      for(let i = index; i < allSongs.length; i++) {
        partialQueue.push(allSongs[i])
      }
      this.props.setCurrentPlaylist(partialQueue)
      // this.props.setCurrentSong(partialQueue[0].id)
      this.props.currentPlaylist(this.props.currentSongId)
    }
  }

  render() {
    // CHECK IF ALBUM EXISTS AND IT HAS SONGS
    if (this.props.album === undefined || this.props.albumSongs === undefined) {
      return null
    }

    // IF THE ALBUM LIKE OBJECT EXISTS, SHOW LIKE ICON, OTHER WISE UNLIKE ICON
    const label = this.state.albumLikeInfo ? <FavoriteIcon style={{ fontSize: 40 }} /> : <FavoriteBorderIcon style={{ fontSize: 40 }} />

    return (
      <div className='playlist-container'>
        <div className='item-play-like'>
          <i className="material-icons" id='greenButton' onClick={this.handlePlay()}>&#xe038;</i>
          <div className="likeButton" onClick={this.handleLike}>{label}</div>
        </div>
        <div className='playlist-header'>
          <p>#</p>
          <p>TITLE</p>
          <i id='clock' className='far'>&#xf017;</i>
        </div>
        <hr className='line-separator'></hr>
        <ul className='playlist'>
          {this.props.albumSongs.map((song, count) => {
            return(
              <li className='playlist-item' key={song.id} onClick={() => this.handleQueue(song.id, this.props.albumSongs)}>
                <p>{count}</p>
                <h1>{song.song_title}</h1>
                <h1>{this.props.artistName}</h1>
                <h1>{song.total_song_time}</h1>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AlbumShowPlaylist