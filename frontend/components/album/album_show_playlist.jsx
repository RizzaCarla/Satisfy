import React from 'react';

class AlbumShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    console.log(this.props.albumSongs[0].id)
    return (
      (e) => {
        this.props.changeCurrentSong(this.props.albumSongs[0].id)
        pButton.innerHTML = '&#xe035;'
      }
    )
  }

  render() {
    console.log()
    return (
      <div>
        <div className='album-item-play-like'>
          <img className="button-logo" src={window.playButton} onClick={this.handlePlay()} />
          <i className="fa">&#xf004;</i>
        </div>
        <div>
          <p>#</p>
          <p>TITLE</p>
          <i className='far'>&#xf017;</i>
          <hr></hr>
        </div>
        <ul>
          {this.props.albumSongs.map((song, count) => {
            return(
              <li key={song.id}>
                {console.log(song)}
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