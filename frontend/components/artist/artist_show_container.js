import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { changeCurrentSong } from '../../actions/song_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbums, fetchAlbum } from '../../actions/album_actions';

const msp = (state, ownProps) => ({
  albums: state.entities.albums,
  artist: state.entities.artists[ownProps.match.params.artistId],
})

const mdp = dispatch => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
  changeCurrentSong: (songId) => dispatch(changeCurrentSong(songId))
})

export default connect(msp, mdp)(ArtistShow)