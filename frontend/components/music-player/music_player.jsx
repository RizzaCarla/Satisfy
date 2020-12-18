import React from 'react';
import { withRouter } from 'react-router';


// constructor(props) {
  //   super(props);
  //   this.setState = {
    //     playStatus: false,
    //     // currentSongUrl: this.props.song.songUrl
    //   }
    //   this.handlePausePlay = this.handlePausePlay.bind(this);
    // }
    
    // play song
    // save audio tag to a variable
    // access this.audio.play*
    
    // handlePausePlay() {
      
      //   if (!this.state.playStatus) {
        //     // if this button has been clicked, then the playStatus is true, pause the song
        //     this.setState({ playStatus: false })
        //     this.audio.pause()
        //   }
        
        //   if (this.state.playStatus) {
          //     // if this button has been clicked, then the playStatus is false, play the song
          //     this.setState({ playStatus: true })
          //     this.audio.play()
          //   }
          
          // } 
          
          // if (!this.state.playStatus) {
            // <div className="musicPlayer">
            //   {/* returns pause logo. song is playing*/}
            //   <i className="material-icons" onClick={() => this.handlePausePlay()}>&#xe036;</i>
            // </div>
            // } else if (this.state.playStatus) {
              //   return (
                //     <div className="musicPlayer">
                //       {/* returns pause logo. song is playing*/}
                //       <i className="material-icons" onClick={() => this.handlePausePlay()}>&#xe039;</i>
                //     </div>
                //   )
                // }
                // }
                
                
class MusicPlayer extends React.Component {
  render() {
    if (this.props.location.pathname != "/us") {         
      if (this.props.songId != null) {
        return(
          <div className="musicPlayer">
            <audio 
            ref={(audio) => {this.audio = audio;}}
            src={`${this.props.songs[this.props.songId].songUrl}`} 
            type="audio/mp3" 
            controls
            autoPlay
            />
          </div>
        )
      } else if (this.props.songId === null) {          
        return (
          <div className="musicPlayer">
            <audio src="" type="audio/mp3" controls />
          </div>
        )
      } else {
        return null;
      }
    }
  }
}

export default withRouter(MusicPlayer);