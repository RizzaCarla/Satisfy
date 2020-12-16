import { connect } from 'react-redux';
import LoginForm from './login_form'
import { login, clearUserErrors } from '../../actions/user_actions'

const msp = state => ({
  error: state.errors.userSession,
  user: {
    email: "",
    password: ""
  }
})

const mdp = dispatch => ({
  login: (user) => dispatch(login(user)),
  clearUserErrors: () => dispatch(clearUserErrors())
})

export default connect(msp, mdp)(LoginForm)