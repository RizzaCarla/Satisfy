import { connect } from 'react-redux';
import MusicPlayer from './music_player'
import { fetchSong } from '../../actions/song_actions'

const msp = state => ({
  song: state.entities.songs[state.session.songId]
})

const mdp = dispatch => ({
  fetchSong: (songId) => dispatch(fetchSong(songId))
})

export default connect(msp, null)(MusicPlayer)