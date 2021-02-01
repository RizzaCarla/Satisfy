import React from 'react';
import SongIndexContainer from '../song/song_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import AlbumIndexContainer from '../album/album_index_container';

class HomePage extends React.Component {
  render() {
    return (
      <div className='home-page-container'>
        <div className='inner-home-page-container'>
          <div className='discover-container'>
            <h1>Discover New Songs</h1>
            <div className='discover-index'>
              <SongIndexContainer />
            </div>
          </div>
          <div className='discover-container'>
            <h1>Discover New Artists</h1>
            <div className='discover-index'>
              <ArtistIndexContainer />
            </div>
          </div>
          <div className='discover-container'>
            <h1>Discover New Albums</h1>
            <div className='discover-index'>
              <AlbumIndexContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;