import React from 'react';
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchArtists()
      .then(() => this.props.fetchAlbums() )
  }

  render() {

    if (!this.props.albums) {
      return null
    }

    if (!this.props.artists) {
      return null
    }

    return (
      <div>
        <ul className='album-index-list'>
          {this.props.albums.map((album, index) => (
            <li key={index}>
              <AlbumIndexItem
                album={album}
                albumId={album.id}
                albums={this.props.albums}
                artists={this.props.artists}
                changeCurrentSong={this.props.changeCurrentSong}
                fetchAlbum={this.props.fetchAlbum}
                fetchArtist={this.props.fetchArtist}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AlbumIndex