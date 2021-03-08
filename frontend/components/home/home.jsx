import React from 'react';
import SongIndexComponent from '../song/song_index';
import ArtistIndexComponent from '../artist/artist_index';
import AlbumIndexComponent from '../album/album_index';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      albums: [],
      artists: [],
    }
  }

  componentDidMount() {
    this.props.fetchArtists()
      .then((result1) => {
        let fourArtists = []
        // for (let i = 0; i <= 3; i++) {
        let complete = false
        while (!complete) {
          complete = false
          let artistIndex = Math.floor(Math.random() * Object.values(result1.artists).length)
          if (!fourArtists.includes(Object.values(result1.artists)[artistIndex])) {
            fourArtists.push(Object.values(result1.artists)[artistIndex])
          }
          if (fourArtists.length === 4) {
            complete = true
          }
        }
        this.setState({
          artists: fourArtists,
        })
      })
        .then(() => this.props.fetchAlbums())
          .then((result2) => {
            let fourAlbums = []
            // for (let i = 0; i <= 3; i++) {
            let complete = false
            while (!complete) {
              complete = false
              let albumIndex = Math.floor(Math.random() * Object.values(result2.albums).length)
              if (!fourAlbums.includes(Object.values(result2.albums)[albumIndex])) {
                fourAlbums.push(Object.values(result2.albums)[albumIndex])
              }
              if (fourAlbums.length === 4) {
                complete = true
              }
            }
            this.setState({
              albums: fourAlbums,
            })
          })
            .then(() => this.props.fetchSongs())
              .then((result3) => {
                let fourSongs = []
                // for (let i = 0; i <= 3; i++) {
                let complete = false
                while (!complete) {
                  complete = false
                  let songIndex = Math.floor(Math.random() * Object.values(result3.songs).length)
                  if (!fourSongs.includes(Object.values(result3.songs)[songIndex])) {
                    fourSongs.push(Object.values(result3.songs)[songIndex])
                  }
                  if (fourSongs.length === 4) {
                    complete = true
                  }
                }
                this.setState({
                  songs: fourSongs,
                })
              })
  }

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
        <NavBarContainer />
        <SideBarContainer />
        <MusicPlayerContainer />
        <div className='home-page-container'>
          <div className='inner-home-page-container'>
            <div className='discover-container'>
              <h1>Discover New Songs</h1>
              <div className='discover-index'>
                <SongIndexComponent 
                  albums={this.props.albums}
                  artists={this.props.artists}
                  songs={this.state.songs}
                  changeCurrentSong={this.props.changeCurrentSong}
                  />
              </div>
            </div>
            <div className='discover-container'>
              <h1>Discover New Albums</h1>
              <div className='discover-index'>
                <AlbumIndexComponent 
                  songs={this.props.songs}
                  albums={this.state.albums}
                  artists={this.props.artists}
                  changeCurrentSong={this.props.changeCurrentSong}
                />
              </div>
            </div>
            <div className='discover-container'>
              <h1>Discover New Artists</h1>
              <div className='discover-index'>
                <ArtistIndexComponent 
                  songs={this.props.songs}
                  albums={this.props.albums}
                  artists={this.state.artists}
                  changeCurrentSong={this.props.changeCurrentSong}
                  />
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default HomePage;