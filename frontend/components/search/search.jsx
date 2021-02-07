import React from 'react';
import SideBarContainer from '../side-bar/sidebar_container';
import MusicPlayerContainer from '../music-player/music_player_container';
import NavBarContainer from '../nav-bar/navbar_container';
import SearchSongIndexItem from '../search/search-song-result/search_song_index_item';
import AlbumIndexItem from '../album/album_index_item';
import ArtistIndexItem from '../artist/artist_index_item';
import SearchSongIndexContainer from './search-song-result/search_song_index_container';

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
    // FETCHES SONGS, ALBUMS, SONGS

    this.props.fetchSongs()
    .then(() => this.props.fetchAlbums())
    .then(() => this.props.fetchArtists())
    if (this.props.searchQuery !== null) {

      // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES SONG TITLE
      this.props.searchSongs(this.props.searchQuery)
        .then((result) => {
          Object.values(result.songs).forEach((song) => {
            this.props.fetchAlbum(song.album_id)
              .then((result2) => {
                this.props.fetchArtist(result2.album.artist_id)
                  .then((result3) => {
                    let photoUrl = {
                      photoUrl: result2.album.photoUrl
                    }
                    let artistName = {
                      artistName: result3.artist.artist_name
                    }
                    this.setState({
                      filteredSongs: { [song.id]: Object.assign(song, photoUrl, artistName ) }
                    })
                  })
              })
          })
        })
        
        // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES ALBUM TITLE
        this.props.searchAlbums(this.props.searchQuery)
        
        // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES ARTIST NAME
        this.props.searchArtists(this.props.searchQuery)
        
      }
    }  
    
    componentDidUpdate(prevProps) {
      // CHECKS IF PROPS CHANGED
      if (this.props.searchQuery && this.props.searchQuery !== prevProps.searchQuery) {
        
        // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES SONG TITLE
        this.props.searchSongs(this.props.searchQuery)
        .then((result) => {
          Object.values(result.songs).forEach((song) => {
            this.props.fetchAlbum(song.album_id)
            .then((result2) => {
              this.props.fetchArtist(result2.album.artist_id)
              .then((result3) => {
                let photoUrl = {
                  photoUrl: result2.album.photoUrl
                }
                let artistName = {
                  artistName: result3.artist.artist_name
                }
                this.setState({
                  filteredSongs: { [song.id]: Object.assign(song, photoUrl, artistName) }
                })
              })
            })
          })
        })
        
        // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES ALBUM TITLE
        this.props.searchAlbums(this.props.searchQuery)
        
        // CHECK IF SEARCH TERM EXISTS AND IF IT MATCHES ARTIST NAME
        this.props.searchArtists(this.props.searchQuery)
        
      }
    }
    
    handleSongs () {
      console.log(this.state.filteredSongs)
      if (Object.values(this.state.filteredSongs).length) {
        return (
          <div className="search-categories">
          <h1>Songs</h1>
          {
            Object.values(this.state.filteredSongs).map((song) => (
              <SearchSongIndexItem 
              key={song.id} song={song} songId={song.id} photoUrl={song.photoUrl} artistName={song.artistName} songTitle={song.song_title}
              // key={song.id} song={song} songId={song.id}
              // artists={this.props.artists} albums={this.props.albums}
              // fetchSong={this.props.fetchSong} fetchAlbum={this.props.fetchAlbum}
              // fetchArtist={this.props.fetchArtist}
               />
              ))
            }
        </div>
      )
    } else {
      return (
        <div className="search-categories">
          <h1>No Songs Matched</h1>
        </div>
      )
    }
  }
  
  handleAlbums() {
    if (this.props.albums.length) {
      return (
        <div className="search-categories">
          <h1>Albums</h1>
          {this.props.albums.map((album) => (
            <AlbumIndexItem key={album.id} album={album} albumId={album.id}
            albums={this.props.albums} artists={this.props.artists}
            fetchAlbum={this.props.fetchAlbum} fetchArtist={this.props.fetchArtist} />
            ))}
        </div>
      )
    } else {
      return (
        <div className="search-categories">
          <h1>No Albums Matched</h1>
        </div>
      )
    }
  }
  
  handleArtists() {
    if (this.props.artists.length) {
      return (
        <div className="search-categories">
          <h1>Artists</h1>
          {this.props.artists.map((artist) => (
            <ArtistIndexItem key={artist.id} artist={artist} artistId={artist.id}
            fetchArtist={this.props.fetchArtist} />
            ))}
        </div>
      )
    } else {      
      return (
        <div className="search-categories">
          <h1>No Artists Matched</h1>
        </div>
      )
    }
  }
  
  render() {
    // ONLY LOAD THIS IF THERE IS EVEN ONE SINGLE MATCH
    if (this.props.searchQuery !== null && this.props.searchQuery.length > 0) {
      return(
        <div>
          <NavBarContainer />
          <SideBarContainer />
          <MusicPlayerContainer />
          <div className="search-results-container">
            <div className='inner-search-results-container'>
              {/* <SearchSongIndexContainer /> */}
              {this.handleSongs()}
              {/* {this.handleAlbums()}
              {this.handleArtists()} */}
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
              <h1>Enter keyworks on the searchbar above to search for your favorite songs, artists, and albums.</h1>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Search;
