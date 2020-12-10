import React from 'react';

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
      <div>
        <h1>Please, Login!</h1>
        <h2>{this.props.error}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')} />
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <button type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;