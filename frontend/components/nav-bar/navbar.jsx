import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({user, logout}) => {
  const loggedIn = () => (
    <div className="app-header-loggedin">
      {/* <div className="loggedin-navigation">
        <div className="backward">
        <i className='fas'>&#xf104;</i>
        </div>
        <div className="forward">
        <i className='fas'>&#xf105;</i>
        </div>
      </div> */}
      <div className="loggedin-logo">
        <Link to='/us'>
            <img id="fullLogo" src={window.fullLogo} />
        </Link>
      </div>
      <nav className='session-navbar-loggedin'>
        <li>
          <a href='https://github.com/RizzaCarla'>Github</a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/rizzamarzo/'>LinkedIn</a>
        </li>
        {/*<a href=''>Resume</a> */}
        <li>
          <p className='separator'> | </p>
        </li>
        <li>
          <Link to='/login' onClick={logout}>Logout</Link>
        </li>
      </nav>
    </div>
  );

  const loggedOut = () => (
    <div className="app-header-loggedout">
      <Link to='/us'>
          <img id="fullLogo" src={window.fullLogo} />
      </Link>
      <nav className='session-navbar-loggedout'>
        <li>
          <a href='https://github.com/RizzaCarla'>Github</a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/rizzamarzo/'>LinkedIn</a>
        </li>
        <li>
          <p className='separator'> | </p>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        {/* <a href=''>Resume</a> */}
      </nav>
    </div>
  );
  return user ? loggedIn() : loggedOut()
}

export default NavBar;