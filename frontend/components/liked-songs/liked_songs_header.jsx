import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class LikedSongsHeader extends React.Component {
  
  render() {
    if (this.props.user === undefined) {
      return null
    }

    if (this.props.totalSongs) {

    }
    let totalSongs
    if (this.props.totalSongs <= 1) {
      totalSongs = "1 Song"
    } else {
      totalSongs = `${this.props.totalSongs} Songs`
    }

    return (
      <div className='header-container'>
        <div className='heart-box'>
          <i id='heart' className='fas'>&#xf004;</i>
        </div>
        <div className='item-details'>
          <h1 className='single'>PLAYLIST</h1>
          <h1 className="title">
            Liked Songs
          </h1>
          <div className='item-inner-details'>
            <p>{this.props.user[0].username}</p>
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

export default LikedSongsHeader