import React from 'react';
import { Link } from 'react-router-dom'

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlay = this.handlePlay.bind(this)
  }

  handlePlay() {
    return(
      (e) => this.props.changeCurrentSong(this.props.song.id)
    )
  }

  render() {
    return (
      <div className='song-index'>
        <li>
        </li>
        <h1>
          {this.props.song.song_title}
        </h1>
          <img id="button-logo" src={window.playButton} onClick={this.handlePlay()}/>
      </div>
    )
  }
}


export default SongIndexItem