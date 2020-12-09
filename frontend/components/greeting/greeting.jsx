import React from 'react'

handleGreeting = () {
  if (user) {
    return (
      <div>
        <Link to={}>Sign Up</Link>
        <Link to={}>Login</Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link to={}>Logout</Link>
      </div>
    )
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Greeting;