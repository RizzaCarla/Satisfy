import React from 'react';
import ArtistIndexItem from '../../artist/artist_index_item';


class LikedArtists extends React.Component {
  render() {
    return (
      <div>
        <ArtistIndexItem 
          artist={artist}
          artistId={artist.id}
          changeCurrentSong={this.props.changeCurrentSong}
        />
      </div>
    )
  }
}

export default LikedArtists