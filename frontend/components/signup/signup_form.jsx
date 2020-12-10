import React from 'react';

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
      // .then(() => this.props.history.push('/'))
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
      <div>
        <h1>Sign Up!</h1>
        {this.handleErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}/>
          </label>
          <label>Email:
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}/>
          </label>
          <label>Password:
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}/>
          </label>
          <button type='submit'>Complete Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;