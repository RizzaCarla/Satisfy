import { connect } from 'react-redux';
import Splash from './splash'

const msp = ({ session }) => {
  // debugger
  return {sessionId: session.id}
}

export default connect(msp, null)(Splash);