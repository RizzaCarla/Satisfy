import React from 'react'
import SearchSongIndexItem from './search_song_index_item'

class SearchSongsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAlbums()
      .then(() => this.props.fetchSongs())
    this.props.fetchArtists()
  }

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
                albums={this.props.albums}
                artists={this.props.artists}
                changeCurrentSong={this.props.changeCurrentSong}
                fetchSong={this.props.fetchSong}
                fetchAlbum={this.props.fetchAlbum}
                fetchArtist={this.props.fetchArtist}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchSongsIndex