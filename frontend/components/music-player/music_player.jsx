import React from 'react';
import { withRouter } from 'react-router';

class MusicPlayer extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.songId);
  }

  handleCheck() {
  }
  
  // checkPaused () {
    //   if (audio.paused) {
      
      //   }
      // }
      
  handleSplash () {
    if (this.props.location.pathname != "/us") {         
      if (this.props.songId != null) {
          return <audio src={`${this.props.songs[this.props.songId].songUrl}`} type="audio/mp3" controls autoPlay/>
      } if (this.props.songId === null) {
        return <audio src="" type="audio/mp3" controls />
      }       
    }
  } 
    
  render() {
    return(
      <div className="musicPlayer">
        {this.handleSplash()}
      </div>
    )
  }  
}

export default withRouter(MusicPlayer);