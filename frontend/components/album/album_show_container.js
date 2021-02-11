import { connect } from 'react-redux';
import AlbumShowContainer from './album_show';
import { changeCurrentSong } from '../../actions/song_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';

const msp = (state, ownProps) => ({
  artists: state.entities.artists,
  album: state.entities.albums[ownProps.match.params.albumId],
})

const mdp = dispatch => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchArtists: () => dispatch(fetchArtists()),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId))
})

export default connect(msp, mdp)(AlbumShowContainer)