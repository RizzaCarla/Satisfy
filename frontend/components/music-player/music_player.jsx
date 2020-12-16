import React from 'react';

class MusicPlayer extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.songId);
  }

  render() {
    return(
      <div className="musicPlayer">
        <audio src={this.props.songs[this.props.songId]} type="audio/mp3" controls autoplay/>
      </div>
    )
  }  
}

export default MusicPlayer