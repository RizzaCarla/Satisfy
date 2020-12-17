import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  handleRedirect() {
    if (this.props.userId != null) {
      return(
        <Link to='/songs' className='redirectLink'>
          <button className='redirectWebPlayer'>Open Web Player</button>
         </Link>
      )
    } else {
      return(
        <div>
          <Link to='/login' className='redirectLink'>
            <button className='redirectWebPlayer' onClick={() => { alert("Login Required") }}>
                  Open Web Player
            </button>
          </Link>
        </div>
      )
    }
  }

  render() {
    return(
      <div className='splash-page'>
        <nav className='left-navbar'>
          <p className='text1'>Looking for music?</p>
          <h1 className='text2'>Start listening to the best new releases.</h1>
          {this.handleRedirect()}
        </nav>
      </div>
    )
  }
}

export default Splash