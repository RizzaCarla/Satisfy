import { connect } from 'react-redux';
import { logout } from '../../actions/user_actions';
import NavBar from './navbar'

const msp = ({ entities, userSession }) => ({
  user: entities.users[userSession.userId]
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(NavBar);