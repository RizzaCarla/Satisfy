import { connect } from 'react-redux';
import webPlayer from './webplayer'

const msp = state => ({
  user: state.entities.users[state.session.id]
})

// const mdp = dispatch => ({

// })

export default connect(msp, null)(webPlayer)