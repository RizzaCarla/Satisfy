import { connect } from 'react-redux';
import LoginForm from './login_form'
import { login, clearErrors } from '../../actions/session_actions'

const msp = state => ({
  user: {
    email: "LuckyDemoUser@gmail.com",
    password: "99999999"
  }
})

const mdp = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(LoginForm)