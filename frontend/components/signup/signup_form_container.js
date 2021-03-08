import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { login, signup, clearUserErrors } from '../../actions/user_actions';

const msp = (state) => ({
  errors: state.errors.userSession,
  demoUser: {
    email: "luckyDemoUser@gmail.com",
    password: "99999999",
    id: 999
  }
})

const mdp = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  clearUserErrors: () => dispatch(clearUserErrors())
})

export default connect(msp, mdp)(SignUpForm)