import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup } from '../../actions/session_actions';

// const msp = state => ({
//   error: state.error.session,
//   user: state.session.id
// })

const mdp = dispatch => ({
  signup: user => dispatch(signup(user))
})

export default connect(null, mdp)(SignUpForm)