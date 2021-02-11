import React from 'react';

class SongShowPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
    // console.log(this.props.albumSongs[0].id)
    return (
      (e) => {
        // this.props.changeCurrentSong(this.props.albumSongs[0].id)
        pButton.innerHTML = '&#xe035;'
      }
    )
  }

  render() {
    if (this.props.songArtist === undefined) {
      return null
    }
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
          <li>
            <p>1</p>
            <h1>{this.props.song.song_title}</h1>
            <h1>{this.props.songArtist.artist_name}</h1>
            <h1>{this.props.song.total_song_time}</h1>
          </li>
        </ul>
      </div>
    )
  }
}

export default SongShowPlaylist