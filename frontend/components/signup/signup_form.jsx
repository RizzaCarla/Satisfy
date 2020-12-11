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
      <div id="session-signup">
        <br></br>
        <h1>Sign up for free to start listening.</h1>
        <br></br>
        {/* <link href="https://en-gb.facebook.com/login/?next"> */}
          <button id='fb-signup-button'>SIGN UP WITH FACEBOOK</button>
        {/* </link> */}
        <p>or</p>
        <p>Sign up with your email address</p>
        <br></br>
        {this.handleErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>What's your email?
            <input 
              type="text"
              placeholder="xyx@gmail.com"
              value={this.state.email}
              onChange={this.handleInput('email')}/>
          </label>
          <label>What should we call you?
            <input 
              type="text"
              placeholder="UserXYZ"
              value={this.state.username}
              onChange={this.handleInput('username')}/>
          </label>
          <label>Password:
            <input 
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
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