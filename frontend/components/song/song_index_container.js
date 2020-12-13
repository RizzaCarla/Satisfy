import { connect } from 'react-redux';
import songIndex from './song_index'
import { fetchSong, fetchSongs } from '../../actions/song_actions'

const msp = state => ({
  songs: state.songs 
})

const mdp = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs),
  fetchSong: () => dispatch(fetchSong)
})

export default connect(msp, mdp)(songIndex)