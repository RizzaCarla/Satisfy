import { connect } from 'react-redux';
import AlbumShowContainer from './album_show';
import { fetchAlbum, fetchAlbums } from '../../actions/album_actions';
import { fetchSong, changeCurrentSong } from '../../actions/song_actions';
import { fetchLikes, destroyLike, createLike } from '../../actions/like_actions';

const msp = (state, ownProps) => ({
  song: state.entities.songs,
  likes: state.entities.likes,
  likeId: state.entities.likes,
  artists: state.entities.artists,
  userId: state.userSession.userId,
  album: state.entities.albums[ownProps.match.params.albumId], 
})

const mdp = dispatch => ({
  fetchLikes: () => dispatch(fetchLikes()),
  fetchSong: (id) => dispatch(fetchSong(id)),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtists: () => dispatch(fetchArtists()),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (like) => dispatch(destroyLike(like)),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId))
})

export default connect(msp, mdp)(AlbumShowContainer)