import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this) 
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
  }

  handleInput(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  render() {
    return (
      <div id="session-login">
        <br></br>
        <div id='login-inner-header'>
          <h1 id='login-greeting'>To continue, log in to Spotify.</h1>
          <a href='https://en-gb.facebook.com/login/?next'>
            <button id='fb-login-button'>Continue with Facebook</button>
          </a>
          <a href='https://www.apple.com/apple-music/'>
            <button id='apple-login-button'>Continue with Apple</button>
          </a>
          <a href='https://accounts.google.com/login'>
            <button id='google-login-button'>Continue with Google</button>
          </a>
          <p id='login-or'>or</p>
        </div>
        <h2>{this.props.error}</h2>
        <form onSubmit={this.handleSubmit} id="login-form">
          <label id='login-label'>Email Address
            <input
              id='login-input-box'
              placeholder='Email Address'
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label>
          <label id='login-label'>Password
            <input
              id='login-input-box'
              placeholder='Password'
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <button type='submit' id='form-login-button'>Login</button>
          <br></br>
          <div id='signup-redirect-question'>
            <p>Don't have an account?</p>
          </div>
          <Link to='/signup'>
            <button id='signup-redirect'>Sign Up for Spotify</button>
          </Link>
        </form>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default LoginForm;