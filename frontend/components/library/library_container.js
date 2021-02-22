import Library from './library';
import { connect } from 'react-redux';
import { fetchSongs, fetchSong, changeCurrentSong } from '../../actions/song_actions';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';
import { fetchArtists, fetchArtist } from '../../actions/artist_actions';
import { fetchLikedSongs, fetchLikedAlbums, fetchLikedArtists } from '../../actions/like_actions';

const msp = state => ({
  likes: Object.values(state.entities.likes),
  songs: state.entities.songs,
  artists: state.entities.artists,
  albums: state.entities.albums,
  currentTab: state.libraryTabReducer.currentTab,
  userId: state.userSession.userId
})

const mdp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtists: () => dispatch(fetchArtists()),
  fetchSong: (song) => dispatch(fetchSong(song)),
  fetchAlbum: (album) => dispatch(fetchAlbum(album)),
  fetchArtist: (artist) => dispatch(fetchArtist(artist)),
  fetchLikedSongs: (userId) => dispatch(fetchLikedSongs(userId)),
  fetchLikedAlbums: (userId) => dispatch(fetchLikedAlbums(userId)),
  fetchLikedArtists: (userId) => dispatch(fetchLikedArtists(userId)),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId))
})

export default connect(msp, mdp)(Library)