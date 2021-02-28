import React from 'react';

class ArtistShowHeader extends React.Component {

  render() {
    return (
      <div className='header-container'>
        <img className='item-photo' src={this.props.artistPhotoUrl} />
        <div className='item-details'>
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