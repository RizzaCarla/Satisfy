import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong } from '../../actions/song_actions';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';

const msp = (state, ownProps) => ({
  song: state.entities.songs[ownProps.match.params.songId],
  albums: state.entities.albums
})

const mdp = dispatch => ({
  fetchSong: (id) => dispatch(fetchSong(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId))
})

export default connect(msp, mdp)(SongShow)