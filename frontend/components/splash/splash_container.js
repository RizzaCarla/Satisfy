import { connect } from 'react-redux';
import Splash from './splash'

const msp = state => ({
  userId: state.userSession.userId
})

export default connect(msp, null)(Splash);