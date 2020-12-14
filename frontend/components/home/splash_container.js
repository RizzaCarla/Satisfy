import { connect } from 'react-redux';
import Splash from './splash'

const msp = ({ entities, session }) => ({
  user: entities.users[session.id]
})

export default connect(msp, null)(Splash);