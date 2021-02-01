import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { fetchArtist, fetchArtists } from '../../actions/artist_actions';

const msp = state => ({
  artists: Object.values(state.entities.artists)
})

const mdp = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchArtist: (id) => dispatch(fetchArtist(id))
})

export default connect(msp, mdp)(ArtistIndex)