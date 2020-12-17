import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';


class Sidebar extends React.Component {

  handleSplash() {
    if (this.props.location.pathname !== "/us") {
      return ( 
        <div className='sidebar'>
          <Link to='/us'>
            <img id="fullLogo" src={window.fullLogo} />
          </Link>
          <ul className='sidebar-list'>
            <div>
              <Link to='/us'>
                <i className="fa">&#xf015;</i><li>Home</li>
              </Link>
            </div>
            <div>
              <Link to='/search'>
                <i className="fa">&#xf002;</i>
                <li>Search</li>
              </Link>
            </div>
            <div>
              <Link to='/songs'>
                <i className='fas'>&#xf7a5;&#xf715;</i>
                <li>Your Library</li>
              </Link>
            </div>
            <br></br>
            <h1 className='sidebar-header'>Playlists</h1>
            <div>
              <i class="material-icons">&#xe146;</i> 
              <li>Create Playlist</li>
            </div>
            <div>
              <i className='fas'>&#xf004;</i>
              <li>Liked Songs</li>
            </div>
            <hr></hr>
            <li>Install App</li>
          </ul>
        </div>
      )

    }
  }

  render() {
    return(
      <div>
        {this.handleSplash()}
      </div>
    )
  }
}

export default withRouter(Sidebar);