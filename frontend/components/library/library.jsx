import React from 'react';
import NavBarContainer from '../nav-bar/navbar_container';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import LikedArtists from '../artist/artist_index_item';
import LikedAlbums from '../album/album_index_item';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: this.props.currentTab,
      likedArtists: [],
      likedAlbums: [],
      likedSongs: [],
    }
  }

  componentDidMount() {
    this.props.fetchArtists()
    this.props.fetchLikedSongs(this.props.userId)
      .then(() => this.setState({
        likedSongs: this.props.likes
      }))
        .then(() => this.props.fetchLikedAlbums(this.props.userId))
          .then(() => this.setState({
            likedAlbums: this.props.likes
          }))
            .then(() => this.props.fetchLikedArtists(this.props.userId))
              .then(() => this.setState({
                likedArtists: this.props.likes
              }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentTab && this.props.currentTab !== prevProps.currentTab) {
      this.setState({
        currentTab: this.props.currentTab
      })
    }
  }
                      
  render() {
    if (this.state.currentTab === "Albums") {
      return (
        <div>
          <NavBarContainer />
          <SideBarContainer />
          <MusicPlayerContainer />
        <div className='outer-library-container'>
          <div className='inner-library-container'>
            <div className='library-container'>
              <h1>Liked Albums</h1>
              <div>
                <ul className='album-index-list'>
                  {
                    this.state.likedAlbums.map((album, index) => (
                      <li key={index}>
                        <LikedAlbums 
                          album={album}
                          albumId={album.id}
                          albumTitle={album.album_title}
                          albumArtistId={album.artist_id}
                          artistName={album.artist.artist_name}
                          albumPhotoUrl={album.albumPhotoUrl}
                          changeCurrentSong={this.props.changeCurrentSong}
                          songs={album.songs}
                          />
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    } else if (this.state.currentTab === "Artists") {
      return (
        <div>
          <NavBarContainer />
          <SideBarContainer />
          <MusicPlayerContainer />
        <div className='outer-library-container'>
          <div className='inner-library-container'>
            <div className='library-container'>
              <h1>Liked Artists</h1>
              <div>
                <ul className='artist-index-list'>
                  {
                    this.state.likedArtists.map((artist, index) => (
                      <li key={index}>
                        <LikedArtists
                          artist={artist}
                          artistId={artist.id}
                          changeCurrentSong={this.props.changeCurrentSong}
                          />
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}

export default Library