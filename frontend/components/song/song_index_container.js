import { connect } from 'react-redux';
import songsIndex from './song_index'
import { fetchSongs } from '../../actions/song_actions'

const msp = state => ({
  songs: state.songs 
})

const mdp = dispatch => ({
  fetchSongs: (songs) => dispatch(fetchSongs(songs)),
})

export default connect(msp, mdp)(songsIndex)