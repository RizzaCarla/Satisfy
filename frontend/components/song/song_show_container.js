import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';
import { fetchSong, changeCurrentSong } from '../../actions/song_actions';
import { fetchLikes, destroyLike, createLike } from '../../actions/like_actions';
const msp = (state, ownProps) => ({
  likes: state.entities.likes,
  likeId: state.entities.likes,
  albums: state.entities.albums,
  userId: state.userSession.userId,
  song: state.entities.songs[ownProps.match.params.songId],
})

const mdp = dispatch => ({
  fetchLikes: () => dispatch(fetchLikes()),
  fetchSong: (id) => dispatch(fetchSong(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (like) => dispatch(destroyLike(like)),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId)),
})

export default connect(msp, mdp)(SongShow)