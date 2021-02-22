import NavBar from './navbar';
import { logout } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { setCurrentTab, clearCurrentTab } from '../../actions/library_tab_actions';
import { setSearchQuery, clearSearchQuery } from '../../actions/search_actions';
import { fetchSongs, fetchSong, searchSongs } from '../../actions/song_actions';
import { fetchAlbums, fetchAlbum, searchAlbums } from '../../actions/album_actions';
import { fetchArtists, fetchArtist, searchArtists } from '../../actions/artist_actions';
import { fetchLikedSongs, fetchLikedAlbums, fetchLikedArtists } from '../../actions/like_actions';

const msp = state => ({
  user: state.userSession.userId,
  songs: Object.values(state.entities.songs),
  artists: Object.values(state.entities.artists),
  albums: Object.values(state.entities.albums),
  searchQuery: state.searchReducer.searchQuery,
  currentTab: state.libraryTabReducer.currentTab
})

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtists: () => dispatch(fetchArtists()),
  fetchSong: (song) => dispatch(fetchSong(song)),
  fetchAlbum: (album) => dispatch(fetchAlbum(album)),
  clearCurrentTab: () => dispatch(clearCurrentTab()),
  clearSearchQuery: () => dispatch(clearSearchQuery()),
  fetchArtist: (artist) => dispatch(fetchArtist(artist)),
  setSearchQuery: (searchQuery) => dispatch(setSearchQuery(searchQuery)),
  setCurrentTab: (currentTab) => dispatch(setCurrentTab(currentTab)),
  searchSongs: (searchQuery) => dispatch(searchSongs(searchQuery)),
  searchArtists: (searchQuery) => dispatch(searchArtists(searchQuery)),
  searchAlbums: (searchQuery) => dispatch(searchAlbums(searchQuery)),
  fetchLikedSongs: (userId) => dispatch(fetchLikedSongs(userId)),
  fetchLikedAlbums: (userId) => dispatch(fetchLikedAlbums(userId)),
  fetchLikedArtists: (userId) => dispatch(fetchLikedArtists(userId)),
})

export default connect(msp, mdp)(NavBar);