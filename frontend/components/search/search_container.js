import Search from './search';
import { connect } from 'react-redux';
import { clearSearchQuery } from '../../actions/search_actions';
import { fetchSongs, fetchSong, searchSongs } from '../../actions/song_actions';
import { fetchArtists, fetchArtist, searchArtists } from '../../actions/artist_actions';
import { fetchAlbums, fetchAlbum, searchAlbums } from '../../actions/album_actions';

const msp = state => ({
  songs: Object.values(state.entities.songs),
  artists: Object.values(state.entities.artists),
  albums: Object.values(state.entities.albums),
  searchQuery: state.searchReducer.searchQuery
})

const mdp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchArtists: () => dispatch(fetchArtists()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchSong: (song) => dispatch(fetchSong(song)),
  fetchAlbum: (album) => dispatch(fetchAlbum(album)),
  clearSearchQuery: () => dispatch(clearSearchQuery()),
  fetchArtist: (artist) => dispatch(fetchArtist(artist)),
  searchSongs: (searchQuery) => dispatch(searchSongs(searchQuery)),
  searchArtists: (searchQuery) => dispatch(searchArtists(searchQuery)),
  searchAlbums: (searchQuery) => dispatch(searchAlbums(searchQuery))
})

export default connect(msp, mdp)(Search)