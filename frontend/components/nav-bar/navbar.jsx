import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class NavBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      query: "",
      currentTab: ""
    }
    // this.handleBackButton = this.handleBackButton.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    // this.handleForwardButton = this.handleForwardButton.bind(this);
    this.handleLikedSongsTab = this.handleLikedSongsTab.bind(this);
    this.handleLikedAlbumsTab = this.handleLikedAlbumsTab.bind(this);
    this.handleLikedArtistsTab = this.handleLikedArtistsTab.bind(this);
    this.handleClearSearchQuery = this.handleClearSearchQuery.bind(this);
  }


  handleClearSearchQuery() {
    document.getElementById('search-close-button').style.visibility = 'hidden';
    this.setState({
      query: ""
    })
    this.props.clearSearchQuery()
  }

  handleSearchQuery(e) {
    e.preventDefault();
    this.setState({
      query: e.target.value
    })
    this.props.setSearchQuery(e.target.value)
    this.props.history.push("/search");
    
    if (e.target.value !== '') {
      document.getElementById('search-close-button').style.visibility = 'visible';
    } else {
      document.getElementById('search-close-button').style.visibility = 'hidden';
    }
  }
  
  handleLikedSongsTab(e) {
    e.preventDefault();
    this.props.setCurrentTab(e.target.id)
    this.setState({
      currentTab: e.target.id
    })
    this.props.history.push("/library")
  }
  
  handleLikedAlbumsTab(e) {
    e.preventDefault();
    this.props.setCurrentTab(e.target.id)
    this.setState({
      currentTab: e.target.id
    })
    this.props.history.push("/library");
  }
  
  handleLikedArtistsTab(e) {
    e.preventDefault();
    this.props.setCurrentTab(e.target.id)
    this.setState({
      currentTab: e.target.id
    })
    this.props.history.push("/library");
  }

  // handleBackButton() {
    
  // }

  // handleForwardButton() {

  // }
  
  render() {
    if (this.props.user) {
      if (this.props.location.pathname === "/search") {
        return (
          <div className="app-header-loggedin-search">

            <div className="loggedin-navigation">
              <div className="backward" onClick={() => this.props.history.goBack()}>
                <i className='fas'>&#xf104;</i>
              </div>
              <div className="forward" onClick={() => this.props.history.goForward()}>
                <i className='fas'>&#xf105;</i>
              </div>
            </div>
            <nav className='session-navbar-loggedin-search'>
              <form className='search-navbar' onChange={this.handleSearch}>
                <i id='magnifying-glass-search' className="material-icons">&#xe8b6;</i>
                <input
                  className='search-input'
                  type='text'
                  placeholder='Search for Artists, Songs, or Albums'
                  value={this.state.query}
                  onChange={this.handleSearchQuery}
                ></input>
                <i className="material-icons" id='search-close-button' onClick={this.handleClearSearchQuery}>&#xe5cd;</i>
              </form>
              <div className='search-navbar-right'>
                <li>
                  <a href='https://rizzacarla.github.io/myPortfolio/' target="_blank" >Portfolio</a>
                </li>
                <li>
                  <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
                </li>
                <li>
                  <Link to='/login' onClick={this.props.logout}>Logout</Link>
                </li>
              </div>
            </nav>
          </div >
        )
      } else if (this.props.location.pathname === "/us") {
        return (
          <div className="app-header-loggedin-splash">
            <Link to='/home'>
              <div className="loggedin-logo">
                <img id="fullLogo-splash" src={window.fullLogo} />
              </div>
            </Link>
            <nav className='session-navbar-loggedin'>
              <li>
                <a href='https://rizzacarla.github.io/myPortfolio/' target="_blank" >Portfolio</a>
              </li>
              <li>
                <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
              </li>
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
              <div className="backward" onClick={() => this.props.history.goBack()}>
                <i className='fas'>&#xf104;</i>
              </div>
              <div className="forward" onClick={() => this.props.history.goForward()}>
                <i className='fas'>&#xf105;</i>
              </div>
            </div>
            <nav className='session-navbar-loggedin-home'>
              <li>
                <a href='https://rizzacarla.github.io/myPortfolio/' target="_blank" >Portfolio</a>
              </li>
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
          <div className="app-header-loggedin-library">
            <div className="loggedin-navigation-library">
              <div className="backward" onClick={() => this.props.history.goBack()}>
                <i className='fas'>&#xf104;</i>
              </div>
              <div className="forward" onClick={() => this.props.history.goForward()}>
                <i className='fas'>&#xf105;</i>
              </div>
            </div>
            <nav className="library-navbar">
              {/* <li 
                className="library-songs-tab" 
                onClick={this.handleLikedSongsTab}
                id="Songs">
                Songs
              </li> */}
              <li 
                className="library-albums-tab" 
                onClick={this.handleLikedAlbumsTab}
                id="Albums">
                Albums
              </li>
              <li 
                className="library-artists-tab" 
                onClick={this.handleLikedArtistsTab}
                id="Artists">
                Artists
              </li>
            </nav>
            <nav className='session-navbar-loggedin-library'>
              <li>
                <a href='https://rizzacarla.github.io/myPortfolio/' target="_blank" >Portfolio</a>
              </li>
              <li>
                <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
              </li>
              <li>
                <Link to='/login' onClick={this.props.logout}>Logout</Link>
              </li>
            </nav>
          </div>
        )
      } else if (this.props.location.pathname === '/liked-songs') {
        return (
          <div className="app-header-loggedin-liked-songs">
            <div className="loggedin-navigation">
              <div className="backward" onClick={() => this.props.history.goBack()}>
                <i className='fas'>&#xf104;</i>
              </div>
              <div className="forward" onClick={() => this.props.history.goForward()}>
                <i className='fas'>&#xf105;</i>
              </div>
            </div>
            <nav className='session-navbar-loggedin-liked-songs'>
              <li>
                <a href='https://rizzacarla.github.io/myPortfolio/' target="_blank" >Portfolio</a>
              </li>
              <li>
                <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
              </li>
              <li>
                <Link to='/login' onClick={this.props.logout}>Logout</Link>
              </li>
            </nav>
          </div>
        )
      } else {
        return (
          <div className="app-header-loggedin-home">
            <div className="loggedin-navigation">
              <div className="backward" onClick={() => this.props.history.goBack()}>
                <i className='fas'>&#xf104;</i>
              </div>
              <div className="forward" onClick={() => this.props.history.goForward()}>
                <i className='fas'>&#xf105;</i>
              </div>
            </div>
            <nav className='session-navbar-loggedin-home'>
              <li>
                <a href='https://rizzacarla.github.io/myPortfolio/' target="_blank" >Portfolio</a>
              </li>
              <li>
                <a href='https://github.com/RizzaCarla' target="_blank" >Github</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/rizzamarzo/' target="_blank" >LinkedIn</a>
              </li>
              <li>
                <Link to='/login' onClick={this.props.logout}>Logout</Link>
              </li>
            </nav>
          </div>
        )
      }
    } else {
      return (
        <div className="app-header-loggedout" >
          <Link to='/us'>
            <img id="fullLogo" src={window.fullLogo} />
          </Link>
          <nav className='session-navbar-loggedout'>
            <li>
              <a href='https://rizzacarla.github.io/myPortfolio/' target="_blank" >Portfolio</a>
            </li>
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
          </nav>
        </div>
      )
    }
  }
}

export default withRouter(NavBar)