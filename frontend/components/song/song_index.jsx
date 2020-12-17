import React from 'react'
import SongIndexItem from './song_index_item'

class songsIndex extends React.Component {

  componentDidMount() {
    return this.props.fetchSongs();
  }

  render() {
    return (
      <div className='show-index'>
        <ul>
            {
              this.props.songs.map((song) => (
                <li>
                  <SongIndexItem 
                    key={song.id}
                    song={song} 
                    songId={this.props.songId}
                    changeCurrentSong={this.props.changeCurrentSong}
                  />
                </li>
              ))
            }
        </ul>
      </div>
    );
  }
}

export default songsIndex