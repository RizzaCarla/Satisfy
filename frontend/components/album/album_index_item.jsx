import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {

  render() {
    if (this.props.album !== undefined) {
      return (
        <div className='album-index-item-container'>
          <Link to={`/albums/${this.props.albumId}`}>
            <div className='album-item'>
              <div className='album-item-images'>
                <img className='album-photo' src={this.props.albumPhotoUrl} />
              </div>
              <div className='album-item-details'>
                <h1 className="album-title">
                  {this.props.albumTitle}
                </h1>
                <p>
                  {this.props.album.artist.artist_name}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )
    } else {
      return null
    }
  }
}

export default AlbumIndexItem