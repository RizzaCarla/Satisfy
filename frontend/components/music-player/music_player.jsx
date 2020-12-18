import React from 'react';
import { withRouter } from 'react-router';

class MusicPlayer extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.songId);
  }
  
  handleSplash() {
    if (this.props.location.pathname != "/us") {
      if (this.props.songId != null) {
        return <audio src={`${this.props.songs[this.props.songId].songUrl}`} type="audio/mp3" controls autoPlay />
      } if (this.props.songId === null) {
        return <audio src="" type="audio/mp3" controls />
      }
    }
  }

  render() {
    return (
      <div className="musicPlayer">
        {this.handleSplash()}
      </div>
    )
  }
}


export default withRouter(MusicPlayer);


// import React from 'react';
// import { withRouter } from 'react-router';
// class MusicPlayer extends React.Component {
//   render() {
//     // if I have current song and I'm on the songs index page, render the ff:
//     if ((this.props.songId != null) && (this.props.location.pathname != "/us")) {         
//         return(
//           <div className="musicPlayer">
//             <audio 
//             ref={(audio) => {this.audio = audio;}}
//             src={`${this.props.songs[this.props.songId].songUrl}`} 
//             type="audio/mp3" 
//             controls
//             autoPlay
//             />
//           </div>
//         )
//       } 

//     // if I do not have a currentsong, and I'm on the songs index page, render the ff:
//     if ((this.props.songId === null) && (this.props.location.pathname != "/us")) {
//         return (
//           <div className="musicPlayer">
//           <audio src="" type="audio/mp3" controls />
//         </div>
//       )
//     }

//     // if I have a current song and I'm on the splash page, render nothing
//     // if ((this.props.songId !== null) && (this.props.location.pathname === "/us")) {         
//       return null;
//     // }
//   }
// }

// export default withRouter(MusicPlayer);


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
                
                