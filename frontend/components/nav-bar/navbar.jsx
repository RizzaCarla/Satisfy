import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';

class NavBar extends React.Component {
  
  handleLoggedIn() {
    if (this.props.location.pathname === "/search") {
      return (
        <div className="app-header-loggedin-search">
          <div className="loggedin-navigation">
            <div className="backward">
              <i className='fas'>&#xf104;</i>
            </div>
            <div className="forward">
              <i className='fas'>&#xf105;</i>
            </div>
          </div>
          <nav className='session-navbar-loggedin-search'>
            <div className='search-navbar'>
              <i id='magnifying-glass-search' className="material-icons">&#xe8b6;</i>
              <input
                className='search-input'
                type='text'
                placeholder='Search for Artists, Songs, or Albums'>
              </input>
              {/* <span>
                
              </span> */}
            </div>
            <div className='search-navbar-right'>
              <li>
                <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
              </li>
            {/*<a href=''>Resume</a> */}
              <li>
                <Link to='/login' onClick={this.props.logout}>Logout</Link>
              </li>
            </div>
          </nav>
        </div>
      )
    } else if (this.props.location.pathname === "/us") {
      return (
        <div className="app-header-loggedin-splash">
          <Link to='/us'>
          <div className="loggedin-logo">
              <img id="fullLogo-splash" src={window.fullLogo} />
          </div>
          </Link>
          <nav className='session-navbar-loggedin'>
            <li>
              <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
            </li>
            {/*<a href=''>Resume</a> */}
            <li>
              <Link to='/login' onClick={this.props.logout}>Logout</Link>
            </li>
          </nav>
        </div>
      )
    } else if (this.props.location.pathname === "/home") {
      return (
        <div className="app-header-loggedin-home">
          <div className="loggedin-navigation">
            <div className="backward">
              <i className='fas'>&#xf104;</i>
            </div>
            <div className="forward">
              <i className='fas'>&#xf105;</i>
            </div>
          </div>
          <nav className='session-navbar-loggedin-home'>
            <li>
              <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
            </li>
            {/*<a href=''>Resume</a> */}
            <li>
              <Link to='/login' onClick={this.props.logout}>Logout</Link>
            </li>
          </nav>
        </div>
      )
    } else if (this.props.location.pathname === "/library") {
      return (
        <div className="app-header-loggedin">
          <div className="loggedin-navigation">
            <div className="backward">
              <i className='fas'>&#xf104;</i>
            </div>
            <div className="forward">
              <i className='fas'>&#xf105;</i>
            </div>
          </div>
          <nav className="library-navbar">
            <li>Artists</li>
            <li>Albums</li>
            <li>Playlists</li>
          </nav>
          <nav className='session-navbar-loggedin'>
            <li>
              <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
            </li>
            {/*<a href=''>Resume</a> */}
            <li>
              <Link to='/login' onClick={this.props.logout}>Logout</Link>
            </li>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="app-header-loggedin">
          <div className="loggedin-navigation">
            <div className="backward">
              <i className='fas'>&#xf104;</i>
            </div>
            <div className="forward">
              <i className='fas'>&#xf105;</i>
            </div>
          </div>
          <nav className='session-navbar-loggedin'>
            <li>
              <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
            </li>
            {/*<a href=''>Resume</a> */}
            <li>
              <Link to='/login' onClick={this.props.logout}>Logout</Link>
            </li>
          </nav>
        </div>
      )
      
    }
  }

  handleLoggedOut() {
    return (
      <div className = "app-header-loggedout" >
        <Link to='/us'>
            <img id="fullLogo" src={window.fullLogo} />
        </Link>
        <nav className='session-navbar-loggedout'>
          <li>
            <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
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
    )
  }

  render() {
    if (this.props.user) {
      return (
        <div>
          {this.handleLoggedIn()}
        </div>
      )
    } else {
      return (
        <div>
          {this.handleLoggedOut()}
        </div>
      )
    }
  }

}

export default withRouter(NavBar)