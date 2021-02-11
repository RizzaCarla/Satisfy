import { connect } from 'react-redux';
import HomePage from './home';
import { fetchSongs, fetchSong, changeCurrentSong } from '../../actions/song_actions';
import { fetchArtists, fetchArtist } from '../../actions/artist_actions';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';

const msp = state => ({
  songs: state.entities.songs,
  albums: state.entities.albums,
  artists: state.entities.artists
})

const mdp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  fetchSong: (id) => dispatch(fetchSong(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchArtists: () => dispatch(fetchArtists()),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId))
})

export default connect(msp, mdp)(HomePage)