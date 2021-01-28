import React from 'react';

class SongShow extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId)
  }
  render() {
    return (
      <div className='song-show-container'>
        {this.props.song.song_title}
      </div>
    )
  }
}

export default SongShow;