import React from 'react';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';
import SearchSongIndexItem from './search-result/search_song_index_item';
import SearchAlbumIndexItem from './search-result/search_album_index_item';
import SearchArtistIndexItem from './search-result/search_artist_index_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredSongs: [],
      filteredAlbums: [], 
      filteredArtists: [], 
    }
    this.handleSongs = this.handleSongs.bind(this)
    this.handleAlbums = this.handleAlbums.bind(this)
    this.handleArtists = this.handleArtists.bind(this)
  }
  
  componentDidMount() {
    this.props.clearSearchQuery()

    // FETCHES SONGS, ALBUMS, SONGS

    this.props.fetchSongs()
    .then(() => this.props.fetchAlbums())
    .then(() => this.props.fetchArtists())
    if (this.props.searchQuery !== null) {

      // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES SONG TITLE
      this.props.searchSongs(this.props.searchQuery)
        .then((result) => {
          let filteredSongsList = []
          Object.values(result.songs).forEach((song) => {
            this.props.fetchAlbum(song.album_id)
              .then((result2) => {
                this.props.fetchArtist(result2.album.artist_id)
                  .then((result3) => {
                    let albumPhotoUrl = {
                      albumPhotoUrl: result2.album.albumPhotoUrl
                    }
                    let artistName = {
                      artistName: result3.artist.artist_name
                    }
                    filteredSongsList.push(Object.assign(song, albumPhotoUrl, artistName))
                  })
                })
              })
              this.setState({
                filteredSongs: filteredSongsList
              })
        })
        
      // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES ALBUM TITLE
      this.props.searchAlbums(this.props.searchQuery)
        .then((result) => {
          let filteredAlbumsList = []
          Object.values(result.albums).forEach((album) => {
            this.props.fetchArtist(album.artist_id)
              .then((result2) => {
                let artistName = {
                  artistName: result2.artist.artist_name
                }
                filteredAlbumsList.push(Object.assign(album, artistName))
              })
            })
            this.setState({
              filteredAlbums: filteredAlbumsList
            })
        })

      // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES ARTIST NAME
      this.props.searchArtists(this.props.searchQuery)
        .then((result) => {
          let filteredArtistsList = []
          Object.values(result.artists).forEach((artist) => {
            filteredArtistsList.push(artist)
          })
          this.setState({
            filteredArtists: filteredArtistsList
          })
        })
      }
    }  
    
  componentDidUpdate(prevProps) {
    // CHECKS IF PROPS CHANGED
    if (this.props.searchQuery && this.props.searchQuery !== prevProps.searchQuery) {
      
      // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES SONG TITLE
      this.props.searchSongs(this.props.searchQuery)
        .then((result) => {
          let filteredSongsList = []
          Object.values(result.songs).forEach((song) => {
            this.props.fetchAlbum(song.album_id)
              .then((result2) => {
                this.props.fetchArtist(result2.album.artist_id)
                  .then((result3) => {
                    let albumPhotoUrl = {
                      albumPhotoUrl: result2.album.albumPhotoUrl
                    }
                    let artistName = {
                      artistName: result3.artist.artist_name
                    }
                    filteredSongsList.push(Object.assign(song, albumPhotoUrl, artistName))
                  })
              })
          })
          this.setState({
            filteredSongs: filteredSongsList
          })
        })
      
      // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES ALBUM TITLE
      this.props.searchAlbums(this.props.searchQuery)
        .then((result) => {
          let filteredAlbumsList = []
          Object.values(result.albums).forEach((album) => {
            this.props.fetchArtist(album.artist_id)
              .then((result2) => {
                let artistName = {
                  artistName: result2.artist.artist_name
                }
                filteredAlbumsList.push(Object.assign(album, artistName))
              })
          })
          this.setState({
            filteredAlbums: filteredAlbumsList
          })
        })

      // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES ARTIST NAME
      this.props.searchArtists(this.props.searchQuery)
        .then((result) => {
          let filteredArtistsList = []
          Object.values(result.artists).forEach((artist) => {
            filteredArtistsList.push(artist)
          })
          this.setState({
            filteredArtists: filteredArtistsList
          })
        })
    }
  }
    
  handleSongs () {
    if (Object.values(this.state.filteredSongs).length) {
      return (
        <div className="search-categories">
          <h1>Songs</h1>
          <ul>
            {
              Object.values(this.state.filteredSongs).map((song) => (
                <li key={song.id}>
                  <SearchSongIndexItem 
                    song={song} songId={song.id} albumPhotoUrl={song.albumPhotoUrl} 
                    artistName={song.artistName} songTitle={song.song_title}
                    />
                </li>
                ))
              }
          </ul>
        </div>
      )
    } else {
      return (
        <div className="search-categories">
          <h1>Songs</h1>
          <h1>No Songs Matched</h1>
        </div>
      )
    }
  }
  
  handleAlbums() {
    if (Object.values(this.state.filteredAlbums).length) {
      return (
        <div className="search-categories">
          <h1>Albums</h1>
          <ul>
            {
              Object.values(this.state.filteredAlbums).map((album) => (
                <li key={album.id} >
                <SearchAlbumIndexItem 
                  album={album} albumId={album.id}
                  artistName={album.artistName} albumPhotoUrl={album.albumPhotoUrl}
                  albumTitle={album.album_title}
                  />
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <div className="search-categories">
          <h1>Albums</h1>
          <h1>No Albums Matched</h1>
        </div>
      )
    }
  }
  
  handleArtists() {
    if (Object.values(this.state.filteredArtists).length)  {
      return (
        <div className="search-categories">
          <h1>Artists</h1>
          <ul>
            {
              Object.values(this.state.filteredArtists).map((artist) => (
                <li key={artist.id}>
                <SearchArtistIndexItem  artist={artist} 
                artistId={artist.id} artistName={artist.artist_name}
                artistPhotoUrl={artist.artistPhotoUrl}
                />
              </li>
              ))
            }
          </ul>
        </div>
      )
    } else {      
      return (
        <div className="search-categories">
          <h1>Artists</h1>
          <h1>No Artists Matched</h1>
        </div>
      )
    }
  }
  
  render() {
    console.log(this.state)
    // ONLY LOAD THIS IF THERE IS EVEN ONE SINGLE MATCH
    if (this.props.searchQuery !== null && this.props.searchQuery.length > 0) {
      return(
        <div>
          <NavBarContainer />
          <SideBarContainer />
          <MusicPlayerContainer />
          <div className="search-results-container">
            <div className='inner-search-results-container'>
              <div className='filtered-container'>
                {this.handleSongs()}
              </div>
              <div className='filtered-container'>
                {this.handleAlbums()}
              </div>
              <div className='filtered-container'>
                {this.handleArtists()}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <NavBarContainer />
          <SideBarContainer />
          <MusicPlayerContainer />
          <div className="search-results-container">
            <div className='inner-search-results-container'>
              <h1 className='default-message'></h1>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Search;
