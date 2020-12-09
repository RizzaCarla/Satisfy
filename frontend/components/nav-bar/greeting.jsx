import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
  
  handleGreeting () {
    if (this.props.user) {
      return (
        <div>
          <Link to='/'>Logout</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Login</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.handleGreeting()}
      </div>
    )
  }
}

export default Greeting;