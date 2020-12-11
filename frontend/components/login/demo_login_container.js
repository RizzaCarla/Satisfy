import { connect } from 'react-redux';
import LoginForm from './login_form'
import { login } from '../../actions/session_actions'

const msp = state => ({
  error: state.errors.session,
  user: {
    email: "LuckyDemoUser@gmail.com",
    password: "99999999"
  }
})

const mdp = dispatch => ({
  login: (user) => dispatch(login(user))
})

export default connect(msp, mdp)(LoginForm)