import React from 'react';

class MusicPlayer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: null
  //   };
  // }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  render() {
    // debugger
    return(
      <div className="musicPlayer">
        <audio src={`${this.state.songUrl}`} type="audio/mpeg" controls />
      </div>
    )
  }  
}

export default MusicPlayer