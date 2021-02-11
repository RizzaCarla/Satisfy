import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {

  render() {

    return (
      <div className='artist-index-item-container'>
        <Link to={`/artists/${this.props.artistId}`}>
          <div className='artist-item'>
            <div className='artist-item-images'>
              <img className='artist-photo' src={this.props.artistPhotoUrl} />
            </div>
            <div className='artist-item-details'>
              <h1 className="artist-title">
                {this.props.artistName}
              </h1>
              <p>Artist</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default ArtistIndexItem