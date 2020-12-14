import { connect } from 'react-redux';
import MusicPlayer from './music_player'

const msp = state => ({
  user: state.entities.users[state.session.id]
})

// const mdp = dispatch => ({

// })

export default connect(msp, null)(MusicPlayer)