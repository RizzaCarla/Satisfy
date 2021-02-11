import React from 'react';

class ArtistShowHeader extends React.Component {

  render() {
    return (
      <div>
        <div className='artist-item-artist-cover'>
          <img className='artist-item-photo' src={this.props.artistPhotoUrl} />
        </div>
        <div className='artist-item-details'>
          <i className='fas'>&#xf058;<h1>Verified Artist</h1></i>
          <h1 className="artist-name">
            {this.props.artistName}
          </h1>
        </div>
      </div>
    )
  }
}

export default ArtistShowHeader