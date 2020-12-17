import React from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <Link to='/'>
          <img id="fullLogo" src={window.fullLogo} />
        </Link>
        <ul className='sidebar-list'>
          <li>Home</li>
          <li>Search</li>
          <li>Your Library</li>
          <br></br>
          <h1 className='sidebar-header'>Playlists</h1>
          <li>Create Playlist</li>
          <Link to='/songs'>
            <li>Liked Songs</li>
          </Link>
          <hr></hr>
          <li>Install App</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;