import React from 'react';

class AlbumShowHeader extends React.Component {
  
  render() {
    if (this.props.albumPhotoUrl === undefined) {
      return null;
    }
    
    return (
      <div className='header-container'>
        <img className='item-photo' src={this.props.albumPhotoUrl} />
        <div className='item-details'>
          <h1>ALBUM</h1>
          <h1 className="title">
            {this.props.albumTitle}
          </h1>
          <div className='item-inner-details'>
            <img className='item-artist-photo' src={this.props.artistPhotoUrl} />
            <p>
              {this.props.artistName}
            </p>
            <i className="fa">&#xf111;</i>
            <p>{this.props.albumSongs.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumShowHeader