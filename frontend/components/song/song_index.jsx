import React from 'react'

class SongsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSongs(this.props.songs)
  }

  render() {
    return () {
      <div>
        {this.props.songs.map((song) => (
          <SongIndexItem song={song} fetchSong={fetchSong}/>
        ))}
      </div>
    }
  }
}

export default SongsIndex