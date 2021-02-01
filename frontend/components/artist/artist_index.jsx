import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {

  componentDidMount() {
    this.props.fetchArtists()
  }

  render() {

    if (!this.props.artists) {
      return null
    }

    return (
      <div>
        <ul className='artist-index-list'>
          {this.props.artists.map((artist, index) => (
            <li key={index}>
              <ArtistIndexItem
                artist={artist}
                artistId={artist.id}
                fetchArtist={this.props.fetchArtist}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ArtistIndex