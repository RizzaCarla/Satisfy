import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({user, logout}) => {
  const loggedIn = () => (
    <div className="app-header">
      <Link to='/'>
          <img id="fullLogo" src={window.fullLogo} />
      </Link>
      <nav className='session-navbar'>
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
        <li className='navbar-logout'>
          <Link to='/' onClick={logout}>Logout</Link>
        </li>
      </nav>
    </div>
  );

  //logout is larger

  const loggedOut = () => (
    <div className="app-header">
      <Link to='/'>
          <img id="fullLogo" src={window.fullLogo} />
      </Link>
      <nav className='session-navbar'>
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