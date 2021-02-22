import React from 'react';

class ArtistShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
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
        likeButton.innerHTML = 'UNFOLLOW'
      }
    )
  }
  
  render() {
    
    if (this.props.artistSongs !== undefined) {  
      return (
        <div>
          <div className='artist-item-play-like'>
            <i className="material-icons" id='greenButton' onClick={this.handlePlay()}>&#xe038;</i>
            <i className="fa">&#xf004;</i>
            <p id='likeButton' onClick={this.handleLike()}>FOLLOWING</p>
          </div>
          <p>SONGS</p>
          <ul>
            {
              this.props.artistSongs.map((song, count3) => {
                return(
                    <li key={song.id}>
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