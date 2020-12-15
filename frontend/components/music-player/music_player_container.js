import { connect } from 'react-redux';
import MusicPlayer from './music_player'

const msp = state => ({
  song: state.entities.songs[state.session.id]
})

const mdp = dispatch => ({

})

export default connect(msp, null)(MusicPlayer)