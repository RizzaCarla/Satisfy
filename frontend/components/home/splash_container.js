import { connect } from 'react-redux';
import Splash from './navbar'

const msp = state => ({
  user: state.entities.users[state.session.id]
})

export default connect(msp, null)(Splash);