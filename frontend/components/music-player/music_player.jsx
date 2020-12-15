import React from 'react';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.song;
  }
  render() {
    debugger
    return(
      <div className="musicPlayer">
        <audio src={`${this.state.songUrl}`} type="audio/mpeg" controls />
      </div>
    )
  }  
}

export default MusicPlayer