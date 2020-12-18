import React from 'react';
import { withRouter } from 'react-router';

class MusicPlayer extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.handlePausePlay = this.handlePausePlay.bind(this);
  // }

  // handlePausePlayIcon() {
  //   if (this.props.playStatus === false) {
  //     //returns pause logo
  //     return <i className="material-icons">&#xe036;</i>
  //   } else {
  //     // returns play logo
  //     return <i className="material-icons">&#xe039;</i>
  //   }
  // }
  
  // play song
  // save audio tag to a variable
  // access this.audio.play*
  
  // handlePausePlay(audio) {
    
  //   if (this.props.playStatus === true) {
  //     // if this button has been clicked, and the playStatus is false, play the song and change the current state to true
  //     audio.pause()
  //     this.props.onPlay()
  //     this.props.onPause()
  //   }

  //   if (this.props.playStatus === false) {
  //     // if this button has been clicked, and the playStatus is false, play the song and change the current state to true
  //     audio.play()
  //     this.props.onPlay()
  //     this.props.onPause()
  //   }

  // }  
  
  render() {
    if (this.props.location.pathname != "/us") {         
      if (this.props.songId != null) {
        return (
          <div className="musicPlayer">
            <audio 
              // ref={(audio) => {this.audio = audio;}}
              src={`${this.props.songs[this.props.songId].songUrl}`} 
              type="audio/mp3" 
              controls
              autoPlay
            />
            {/* <div onClick={this.handlePausePlay(this.audio)}>
              {this.handlePausePlayIcon()}
            </div> */}
          </div>
        )
      } if (this.props.songId === null) {          
        return (
          <div className="musicPlayer">
            <audio src="" type="audio/mp3" controls />
          </div>
        )
      }    
    } else {
      return null
    }
  }  
}

export default withRouter(MusicPlayer);