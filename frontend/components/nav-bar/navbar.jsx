import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({user, logout}) => {
  const loggedIn = () => (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  );

  const loggedOut = () => (
    <nav className='navbar'>
      <Link to='/signup'>Sign Up</Link>
      &nbsp;&nbsp;
      <Link to='/login'>Login</Link>
      &nbsp;&nbsp;
      <Link to='/demologin'>Demo Login</Link>
    </nav>
  );

  return user ? loggedIn() : loggedOut()
}

export default NavBar;