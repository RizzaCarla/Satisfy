import React from 'react';
import { Link } from 'react-router-dom'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.signup(this.state)
  }

  handleErrors() {
    return(
      <ul>
        {this.props.errors.map((error, index) =>
            <li key={`error-${index}`}>
              {error}
            </li>
        )}
      </ul>
    )
  }

  componentWillUnmount() {
    this.props.clearUserErrors()
  }

  render() {
    return(
      <div className="session-signup">
        <br></br>
        <div className='signup-inner-header'>
          <h1 className='signup-greeting'>Sign up for free to start listening.</h1>
          <a href='https://en-gb.facebook.com/login/?next'>
            <button className='fb-signup-button'>Sign up with Facebook</button>
          </a>
          <p className='signup-or'>or</p>
          <h2 className='signup-email-header'>Sign up with your email address</h2>
        </div>
        {this.handleErrors()}
        <form onSubmit={this.handleSubmit}  className="signup-form">
          <label className="signup-label">What's your email?
            <input
              className='signup-input-box'
              type="text"
              placeholder="Enter your email."
              value={this.state.email}
              onChange={this.handleInput('email')}/>
          </label>
          <br></br>
          <label className="signup-label">What should we call you?
            <input 
              className='signup-input-box'
              type="text"
              placeholder="Enter a profile name."
              value={this.state.username}
              onChange={this.handleInput('username')}/>
          </label>
          <br></br>
          <label className="signup-label">Create a password
            <input 
              className='signup-input-box'
              type="password"
              placeholder="Create a password."
              value={this.state.password}
              onChange={this.handleInput('password')}/>
          </label>
          <div className='signup-terms'>
            <p>
              By clicking on Sign up, you agree to Satisfy's Terms and Conditions of Use.<br/>
              To learn more about how Satisfy collects, uses, shares and protects your personal data please read Satisfy's Privacy Policy.
            </p>
          </div>
          <button type='submit' className='form-signup-button'>Sign Up</button>
          <br></br>
          <p className='login-redirect'>Have an account?<Link to='/login'>Log in.</Link></p>
        </form>
      </div>
    )
  }
}

export default SignUpForm;