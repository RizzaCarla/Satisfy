import React from 'react';

class MusicPlayer extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.songId);
  }

  handleCheck() {
    if (this.props.songId != null) {
      return <audio src={`${this.props.songs[this.props.songId].songUrl}`} type="audio/mp3" controls autoPlay />
      
    } else {
      return <audio src="" type="audio/mp3" controls autoPlay />
    }
  }

  render() {
    return(
      <div className="musicPlayer">
        {this.handleCheck()}
      </div>
    )
  }  
}

export default MusicPlayer