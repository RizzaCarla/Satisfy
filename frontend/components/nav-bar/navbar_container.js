import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar'

const msp = state => ({
  user: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(NavBar);