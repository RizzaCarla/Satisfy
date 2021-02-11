import React from 'react';

class AlbumShowHeader extends React.Component {
  
  render() {
    if (this.props.albumPhotoUrl === undefined) {
      return null;
    }
    return (
      <div>
        <div className='album-item-album-cover'>
          <img className='album-item-photo' src={this.props.albumPhotoUrl} />
        </div>
        <div className='album-item-details'>
          <h1>ALBUM</h1>
          <h1 className="album-title">
            {this.props.albumTitle}
          </h1>
          <img className='album-item-artist-photo' src={this.props.artistPhotoUrl} />
          <p>
            {this.props.artistName}
          </p>
          <i className="fa">&#xf111;</i>
          <p>{this.props.albumSongs.length}</p>
        </div>
      </div>
    )
  }
}

export default AlbumShowHeader