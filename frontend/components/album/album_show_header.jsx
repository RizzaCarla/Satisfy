import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class AlbumShowHeader extends React.Component {
  
  render() {
    if (this.props.albumPhotoUrl === undefined) {
      return null;
    }

    let totalSongs
    if (this.props.albumSongs.length <= 1) {
      totalSongs = "1 Song"
    } else {
      totalSongs = `${this.props.albumSongs.length} Songs`
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
            <div className='circle-separator'>
              <FiberManualRecordIcon style={{ fontSize: 8 }} />
            </div>
            <p>{totalSongs}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumShowHeader