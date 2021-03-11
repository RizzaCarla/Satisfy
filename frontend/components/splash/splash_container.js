import { connect } from 'react-redux';
import Splash from './splash'

const msp = state => ({
  userId: state.userSession.userId,
  albums: state.entities.albums
})

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Splash);