import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class SongShowHeader extends React.Component {

  render() {
    if (this.props.songArtist === undefined) {
      return null
    }
    return (
      <div className='header-container'>
        <img className='item-photo' src={this.props.song.albumPhotoUrl} />
        <div className='item-details'>
          <h1 className='single'>SINGLE</h1>
          <h1 className="title">
            {this.props.songTitle}
          </h1>
          <div className='item-inner-details'>
            <img className='item-artist-photo' src={this.props.song.artistPhotoUrl} />
            <p>
              {this.props.songArtist.artist_name}
            </p>
            <div className='circle-separator'>
              <FiberManualRecordIcon style={{ fontSize: 8 }} />
            </div>
            <p>1 song, {this.props.totalSongTime}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SongShowHeader