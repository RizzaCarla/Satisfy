import React from 'react'
import SongIndexItem from './song_index_item'

class songsIndex extends React.Component {
  
  render() {

    if (!this.props.albums) {
      return null
    }
    if (!this.props.artists) {
      return null
    }
    if (!this.props.songs) {
      return null
    }
    
    return (
      <div>
        <ul className='song-index-list'>  
          {this.props.songs.map((song, index) => (
              <li key={index}>
                <SongIndexItem
                  song={song}
                  songId={song.id}
                  songArtist={song.artist}
                  albumPhotoUrl={song.albumPhotoUrl}
                  changeCurrentSong={this.props.changeCurrentSong}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default songsIndex