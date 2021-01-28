import React from 'react'
import SongIndexItem from './song_index_item'

class songsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {

    if (!this.props.songs) {
      return null
    }
    
    return (
      <div className='show-index'>
        <ul>
            {
              this.props.songs.map((song, index) => (
                <li key={index}>
                  <SongIndexItem
                    
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