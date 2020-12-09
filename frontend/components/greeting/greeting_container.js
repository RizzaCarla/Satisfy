import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting'

const msp = state => ({
  user: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
  logout: () => dispatch(logout(user))
})

export default connect(msp, mdp)(Greeting);