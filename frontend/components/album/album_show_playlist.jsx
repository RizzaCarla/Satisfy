import React from 'react';

class AlbumShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleLike = this.handleLike.bind(this);
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
    return (
      (e) => {
        likeButton.innerHTML = '&#xf08a;'
      }
    )
  }

  render() {
    return (
      <div>
        <div className='album-item-play-like'>
          <i className="material-icons" id='greenButton' onClick={this.handlePlay()}>&#xe038;</i>
          <i className="fa" id='likeButton' onClick={this.handleLike()}>&#xf004;</i>
        </div>
        <div>
          <p>#</p>
          <p>TITLE</p>
          <i id='clock' className='far'>&#xf017;</i>
          <hr></hr>
        </div>
        <ul>
          {this.props.albumSongs.map((song, count) => {
            return(
              <li key={song.id}>
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