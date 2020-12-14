import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar'

const msp = ({ entities, session }) => ({
  user: entities.users[session.id]
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(NavBar);