import React from 'react';
import green from "@material-ui/core/colors/green";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class ArtistShowHeader extends React.Component {

  render() {
    return (
      <div className='header-container'>
        {/* <img className='artist-item-photo' src={} /> */}
        <div className='item-details'>
          <div className='verified'>
            <CheckCircleIcon style={{ color: green[500] }}/>
            <h1>Verified Artist</h1>
          </div>
          <h1 className="artist-name">
            {this.props.artistName}
          </h1>
        </div>
      </div>
    )
  }
}

export default ArtistShowHeader