import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchSongs, fetchSong, changeCurrentSong } from '../../actions/song_actions';
import { fetchArtist, fetchArtists } from '../../actions/artist_actions';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';

const msp = state => ({
  artists: state.entities.artists,
  albums: Object.values(state.entities.albums),
  songs: state.entities.albums
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

export default connect(msp, mdp)(AlbumIndex)