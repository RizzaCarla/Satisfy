import React from 'react';
import AlbumIndexItem from './album_index_item'

class AlbumIndex extends React.Component {

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
                artists={this.props.artists}
                albumTitle={album.album_title}
                albumArtistId={album.artist_id}
                albumPhotoUrl={album.albumPhotoUrl}
                changeCurrentSong={this.props.changeCurrentSong}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AlbumIndex