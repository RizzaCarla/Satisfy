import { connect } from 'react-redux';
import Splash from './splash'

const msp = ({ userSession }) => {
  return {userSessionId: userSession.id}
}

export default connect(msp, null)(Splash);