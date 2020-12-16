import React from 'react';

class showSong extends React.Component {
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId)
  }
  render() {
    return (
      <div className=''>
        {this.props.song.song_title}
      </div>
    )
  }
}

export default showSong;