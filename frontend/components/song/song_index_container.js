import { connect } from 'react-redux';
import songsIndex from './song_index'
import { fetchSongs } from '../../actions/song_actions'

const msp = state => ({
  songs: Object.values(state.songs)
})

const mdp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
})

export default connect(msp, mdp)(songsIndex)