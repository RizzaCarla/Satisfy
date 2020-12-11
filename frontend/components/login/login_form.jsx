import React from 'react';
// import { Link } from 'react-router-dom'

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

  render() {
    return (
      <div className="session-login">
        <br></br>
        <h1>To continue, log in to Spotify.</h1>
        <button id='fb-login-button'>Continue with Facebook</button>
        <button id='apple-login-button'>Continue with Apple</button>
        <button id='google-login-button'>Continue with Google</button>
        <h2>{this.props.error}</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <label id='login-label'>Email:
            <input
              id='login-input-box'
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label>
          <br></br>
          <label id='login-label'>Password:
            <input
              id='login-input-box'
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <br></br>
          <button type='submit' id='form-login-button'>Login</button>
          <br></br>
          <a>Forgot account?</a>
        </form>
      </div>
    )
  }
}

export default LoginForm;