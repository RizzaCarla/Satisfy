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

  render() {
    return(
      <div id="session-signup">
        <br></br>
        <div id='signup-inner-header'>
          <h1 id='signup-greeting'>Sign up for free to start listening.</h1>
          <a href='https://en-gb.facebook.com/login/?next'>
            <button id='fb-signup-button'>Sign up with Facebook</button>
          </a>
          <p id='signup-or'>or</p>
          <h2 id='signup-email-header'>Sign up with your email address</h2>
        </div>
        {this.handleErrors()}
        <form onSubmit={this.handleSubmit}  id="signup-form">
          <label id="signup-label">What's your email?
            <input
              id='signup-input-box'
              type="text"
              placeholder="Enter your email."
              value={this.state.email}
              onChange={this.handleInput('email')}/>
          </label>
          <br></br>
          <label id="signup-label">What should we call you?
            <input 
              id='signup-input-box'
              type="text"
              placeholder="Enter a profile name."
              value={this.state.username}
              onChange={this.handleInput('username')}/>
          </label>
          <br></br>
          <label id="signup-label">Create a password
            <input 
              id='signup-input-box'
              type="password"
              placeholder="Create a password."
              value={this.state.password}
              onChange={this.handleInput('password')}/>
          </label>
          <div id='signup-terms'>
            <p>
              By clicking on Sign up, you agree to Spotify's Terms and Conditions of Use.<br/>
              To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's Privacy Policy.
            </p>
          </div>
          <button type='submit' id='form-signup-button'>Sign Up</button>
          <br></br>
          <p id='login-redirect'>Have an account?
            <Link to='/login'> Log in.</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default SignUpForm;