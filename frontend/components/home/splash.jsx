import React from 'react';

class Splash extends React.Component {

  redirectWebPlayer () {
    
    return(
    <Link to='/signup'>
      <button id='signup-redirect'>Sign Up for Spotify</button>
    </Link>
    )
  }
  
  render() {
    return (
      <div id='splash-page'>
        <p>Recently Played</p>
        <h1>Jump back in</h1>
        <h2>Pick up your music right where you left off.</h2>
        {this.redirectWebPlayer}
      </div>
    )
  }
}

export default Splash