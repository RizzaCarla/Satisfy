import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup } from '../../actions/session_actions';

const msp = (state) => ({
  errors: state.errors.session,
  demoUser: {
    email: "luckyDemoUser@gmail.com",
    password: "99999999",
    id: 999
  }
})

const mdp = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SignUpForm)