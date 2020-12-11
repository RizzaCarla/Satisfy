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
      // .then(() => this.props.history.push('/'))
  }

  handleInput(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  render() {
    return (
      <div className="session-login">
        <br></br>
        <h1>To continue, log in to Spotify.</h1>
        <h2>{this.props.error}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label>
          <br></br>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <br></br>
          <button type='submit'>Login</button>
          <br></br>
          <a>Forgot account?</a>
        </form>
      </div>
    )
  }
}

export default LoginForm;