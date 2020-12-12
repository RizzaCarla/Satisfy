import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({user, logout}) => {
  const loggedIn = () => (
    <div className='loggedin-navbar'>
      <Link to='/'>
        <img id="userPic" src={window.userPic} />
      </Link>
        {/* <button >Logout</button> */}
      <select id='loggedin-navbar-dropdown'>
        <Link to='/'>
          <option onClick={logout}>
          </option>
        </Link>
      </select>
      <Link to='/' onClick={logout}>
        Logout
      </Link>
    </div>
  );

  const loggedOut = () => (
    <div className="app-header">
      <Link to='/'>
          <img id="fullLogo" src={window.fullLogo} />
      </Link>
      <nav className='loggedout-navbar'>
        <a href='https://github.com/RizzaCarla'>Github</a>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        <a href='https://www.linkedin.com/in/rizzamarzo/'>LinkedIn</a>
        {/* &nbsp;&nbsp;
        <a href=''>Resume</a> */}
        <p id='separator'> | </p>
        <Link to='/signup'>Sign Up</Link>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        <Link to='/login'>Login</Link>
      </nav>
    </div>
  );

  return user ? loggedIn() : loggedOut()
}

export default NavBar;