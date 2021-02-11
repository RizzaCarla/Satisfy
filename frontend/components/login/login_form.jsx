import React from 'react';
import { Link } from 'react-router-dom'
import NavBarContainer from '../nav-bar/navbar_container'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this) 
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this) 
  }
  handleLoginSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
    .then(() => (this.props.history.push('/us')))
  }
  
  handleDemoSubmit(e) {
    e.preventDefault()
    this.props.login({
      email: "LuckyDemoUser@gmail.com",
      password: "99999999"
    })
    .then(() => (this.props.history.push('/us')))
  }

  handleInput(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  componentWillUnmount() {
    this.props.clearUserErrors()
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="session-login">
          <br></br>
          <div className='login-inner-header'>
            <h1 className='login-greeting'>To continue, log in to Spotify.</h1>
            <a href='https://en-gb.facebook.com/login/?next'>
              <button className='fb-login-button'>Continue with Facebook</button>
            </a>
            <a href='https://www.apple.com/apple-music/'>
              <button className='apple-login-button'>Continue with Apple</button>
            </a>
            <a href='https://accounts.google.com/login'>
              <button className='google-login-button'>Continue with Google</button>
            </a>
            <p className='login-or'>or</p>
          </div>
          <h2>{this.props.error}</h2>
          <form className="login-form">
            <label className='login-label'>Email Address
              <input
                className='login-input-box'
                placeholder='Email Address'
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')} />
            </label>
            <label className='login-label'>Password
              <input
                className='login-input-box'
                placeholder='Password'
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
            </label>
            <div className='login-buttons'>
              <button type='submit' className='form-login-button' onClick={this.handleLoginSubmit}>Login</button>
              <button type='submit' className='demo-login-button' onClick={this.handleDemoSubmit}>Demo Login</button>
            </div>
            <br></br>
            <div className='signup-redirect-question'>
              <p>Don't have an account?</p>
            </div>
            <Link to='/signup'>
              <button className='signup-redirect'>Sign Up for Satisfy</button>
            </Link>
          </form>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    )
  }
}

export default LoginForm;