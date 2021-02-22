import React from 'react';
import { withRouter } from 'react-router';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this)
  }

  componentDidMount() {
    this.props.fetchSongs()
  }

  handlePlay() {
    const audio = document.getElementById('audio')
    const pButton = document.getElementById('pButton')
     if (audio.paused) {
      audio.play()
      pButton.innerHTML = '&#xe035;'
    } else {
      audio.pause()
      pButton.innerHTML = '&#xe038;'
    }
  }
  
  render() {

    if (this.props.location.pathname != "/us") {
      if (this.props.songId != null) {
        return (
          <div className="musicPlayer">
            <div className='pButton-container'>
              <i id='pButton' onClick={this.handlePlay} className="material-icons">&#xe038;</i>
            </div>
            <audio id='audio' src={`${this.props.songs[this.props.songId].songUrl}`} type="audio/mp3" />
          </div>
        )
      } if (this.props.songId === null) {
        return (
          <div className="musicPlayer">
            <div className='pButton-container'>
              <i id='pButton' onClick={this.handlePlay} className="material-icons">&#xe038;</i>
            </div>
            <audio id='audio'src="" type="audio/mp3" />
          </div>
        )
      }
    } else {
      return null
    }
  }
}


export default withRouter(MusicPlayer);
