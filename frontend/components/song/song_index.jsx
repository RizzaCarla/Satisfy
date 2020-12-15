import React from 'react'
import SongIndexItem from './song_index_item'

class songsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.songs.map((song) => (
              <SongIndexItem 
                key={song.id}
                song={song} 
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default songsIndex