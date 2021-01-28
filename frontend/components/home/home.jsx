import React from 'react';
import SongIndexContainer from '../song/song_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import AlbumIndexContainer from '../album/album_index_container';

class HomePage extends React.Component {
  render() {
    return (
      <div className='home-page-container'>
        <div className='disover-song-container'>
          {/* <h1>Discover New Songs</h1> */}
          <SongIndexContainer />
        </div>
        {/* <div className='disover-artist-container'>
          <h1>Discover New Artists</h1>
          <ArtistIndexContainer />
        </div>
        <div className='disover-album-container'>
          <h1>Discover New Albums</h1>
          <AlbumIndexContainer />
        </div> */}
      </div>
    )
  }
}

export default HomePage;