import React from 'react';

class MusicPlayer extends React.Component {
  render() {
    return(
      <div className="musicPlayer">
        <audio src={""} type="audio/mpeg" controls />
      </div>
    )
  }  
}

export default MusicPlayer