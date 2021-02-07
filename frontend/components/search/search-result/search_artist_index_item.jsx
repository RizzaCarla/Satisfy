import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {

  render() {

    return (
      <div className='artist-index-item-container'>
        <Link to={`/artists/${this.props.artistId}`}>
          <div className='artist-item'>
            <img className='artist-photo' src={this.props.photoUrl} />
            <h1 className="artist-title">
              {this.props.artistName}
            </h1>
            <p>Artist</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default ArtistIndexItem