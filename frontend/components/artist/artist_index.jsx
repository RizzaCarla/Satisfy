import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {

  render() {

    if (!this.props.albums) {
      return null
    }
    if (!this.props.artists) {
      return null
    }
    if (!this.props.songs) {
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
                changeCurrentSong={this.props.changeCurrentSong}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ArtistIndex